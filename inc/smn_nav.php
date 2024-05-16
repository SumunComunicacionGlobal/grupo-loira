<?php
/**
 * Hooks to add content above the navigation block.
 *
 * Get the navigation block content and insert the content of a template at /template-hooks/navigation.php
 *
 * @package Grupo Loira
 */

 function add_content_above_to_navigation_block($block_content, $block) {
	// Verificar si el bloque es un bloque de navegación
	if ('core/navigation' === $block['blockName']) {
		// Añadir el logo del sitio
		$site_logo = '<div class="mobile-logo"><img width="220px" src="' . get_template_directory_uri() . '/assets/img/logo-grupo-loira-restauracion.svg" alt="Logo"></div>';
		// Buscar el div con la clase wp-block-navigation__responsive-dialog
		$pattern = '/(<div class="wp-block-navigation__responsive-dialog"[^>]*>)/';
		preg_match($pattern, $block_content, $matches, PREG_OFFSET_CAPTURE);

		// Si se encuentra el div, insertar el logo después de él
		if ($matches) {
			$block_content = substr_replace($block_content, $matches[0][0] . $site_logo, $matches[0][1], strlen($matches[0][0]));
		}
	}

	return $block_content;
}

add_filter('render_block', 'add_content_above_to_navigation_block', 10, 2);
