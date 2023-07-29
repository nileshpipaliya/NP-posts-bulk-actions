<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       #
 * @since      1.2.0
 *
 * @package    Wp_Posts_Bulk_Actions
 * @subpackage Wp_Posts_Bulk_Actions/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.2.0
 * @package    Wp_Posts_Bulk_Actions
 * @subpackage Wp_Posts_Bulk_Actions/includes
 * @author     Nilesh Pipaliya <pipaliyanilesh04@gmail.com>
 */
class Wp_Posts_Bulk_Actions_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.2.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'wp-posts-bulk-actions',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
