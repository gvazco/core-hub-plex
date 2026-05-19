<?php

add_filter('acf/settings/rest_api_format', function () {
    return 'standard';
});

add_filter('register_rest_route_args', function ($args, $route) {
    if (strpos($route, 'menu-items') !== false) {
        $args['permission_callback'] = '__return_true';
    }
    return $args;
}, 10, 2);

// Permitir acceso público a nav_menu_item
add_filter('rest_endpoints', function ($endpoints) {
    if (isset($endpoints['/wp/v2/menu-items'])) {
        foreach ($endpoints['/wp/v2/menu-items'] as $key => $endpoint) {
            if (isset($endpoint['permission_callback'])) {
                $endpoints['/wp/v2/menu-items'][$key]['permission_callback'] = '__return_true';
            }
        }
    }
    if (isset($endpoints['/wp/v2/menu-items/(?P<id>[\\d]+)'])) {
        foreach ($endpoints['/wp/v2/menu-items/(?P<id>[\\d]+)'] as $key => $endpoint) {
            if (isset($endpoint['permission_callback'])) {
                $endpoints['/wp/v2/menu-items/(?P<id>[\\d]+)'][$key]['permission_callback'] = '__return_true';
            }
        }
    }
    return $endpoints;
});

// Bypass de permisos para nav_menu_item
add_filter('user_has_cap', function ($capabilities, $cap, $args) {
    if (in_array($cap, array('read_nav_menus', 'read_private_nav_menus'))) {
        return array_merge($capabilities, array($cap => true));
    }
    return $capabilities;
}, 10, 3);

function coffee_shop_setup()
{
    add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'coffee_shop_setup');

function coffee_shop_api_init()
{
    register_rest_field(
        array('page', 'post', 'gallery'),
        'featured_images',
        array(
            'get_callback' => 'get_featured_image',
        )
    );

    register_rest_field(
        array('post'),
        'category_details',
        array('get_callback' => 'get_post_categories')
    );

    register_rest_field(
        array('post'),
        'tag_details',
        array('get_callback' => 'get_post_tags')
    );

    register_rest_field(
        array('post'),
        'author_details',
        array('get_callback' => 'get_post_authors')
    );

    register_rest_field(
        array('gallery'),
        'category_details',
        array('get_callback' => 'get_gallery_categories')
    );

    register_rest_field(
        array('gallery'),
        'tecnica_details',
        array('get_callback' => 'get_gallery_tecnicas')
    );

    register_rest_field(
        array('page', 'gallery'),
        'gallery',
        array('get_callback' => 'get_gallery_images')
    );
}

add_action('rest_api_init', 'coffee_shop_api_init');

function get_featured_image($post)
{

    if (!$post['featured_media']) {
        return false;
    }

    $image_sizes = get_intermediate_image_sizes();

    $images = array();

    foreach ($image_sizes as $size) {
        if ($size === '2048x2048') {
            continue;
        }

        $image = wp_get_attachment_image_src($post['featured_media'], $size);
        if (!$image || !is_array($image)) {
            $images[$size === '1536x1536' ? 'full' : $size] = [
                'url' => null,
                'width' => null,
                'height' => null,
            ];
            continue;
        }

        $images[$size === '1536x1536' ? 'full' : $size] = array(
            'url' => $image[0] ?? null,
            'width' => $image[1] ?? null,
            'height' => $image[2] ?? null,
        );
    }

    return $images;
}

function get_post_categories($post)
{
    return array_map(
        function ($category_id) {
            $cat = get_category($category_id, 'ARRAY_A');

            return [
                'id' => $cat['term_id'],
                'name' => $cat['name'],
                'slug' => $cat['slug'],
            ];
        },
        $post['categories']
    );
}

function get_post_tags($post) {
    return array_map(
        function ($tag_id) {
            $tag = get_tag($tag_id, ARRAY_A);
            return [
                'id' => $tag['term_id'],
                'name' => $tag['name'],
                'slug' => $tag['slug'],
            ];
        },
        $post['tags']
    );
}

function get_post_authors($post)
{
    $terms = wp_get_post_terms($post['id'], 'post_author');

    if (is_wp_error($terms) || empty($terms)) {
        return [];
    }

    return array_map(function ($term) {
        return [
            'id' => $term->term_id,
            'name' => $term->name,
            'slug' => $term->slug,
        ];
    }, $terms);
}

function get_gallery_categories($post)
{
    $terms = wp_get_post_terms($post['id'], 'gallery_hashtag');

    if (is_wp_error($terms) || empty($terms)) {
        return [];
    }

    return array_map(function ($term) {
        return [
            'id' => $term->term_id,
            'name' => $term->name,
            'slug' => $term->slug,
        ];
    }, $terms);
}

function get_gallery_tecnicas($post)
{
    $terms = wp_get_post_terms($post['id'], 'tecnica');

    if (is_wp_error($terms) || empty($terms)) {
        return [];
    }

    return array_map(function ($term) {
        return [
            'id' => $term->term_id,
            'name' => $term->name,
            'slug' => $term->slug,
        ];
    }, $terms);
}

function get_gallery_images($post)
{
    $gallery = get_post_gallery($post['id'], false);

    if (empty($gallery) || !is_array($gallery) || empty($gallery['ids'])) {
        return [];
    }

    $gallery_ids = array_filter(array_map('intval', explode(',', $gallery['ids'])));
    if (empty($gallery_ids)) {
        return [];
    }

    return array_map(
        function ($image_id) {
            $large_image = wp_get_attachment_image_src($image_id, 'large');
            $full_image = wp_get_attachment_image_src($image_id, 'full');

            return [
                'large' => [
                    'url' => $large_image[0] ?? null,
                    'width' => $large_image[1] ?? null,
                    'height' => $large_image[2] ?? null,
                ],
                'full' => [
                    'url' => $full_image[0] ?? null,
                    'width' => $full_image[1] ?? null,
                    'height' => $full_image[2] ?? null,
                ],
            ];
        },
        $gallery_ids
    );
}