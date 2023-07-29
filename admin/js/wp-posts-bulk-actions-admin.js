(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	 $(document).ready( function() {
	 	if ($('.wp-bulk-actions-label-text:checked').length == $('.wp-bulk-actions-label-text').length) {
	       $('.wp-bulk-actions-label-all').attr('checked','checked');
	    }

	 	$(document).on('submit','form#wp-pb-action-form',function(e){
   			e.preventDefault(); 
      		var wp_post_type = new Array();
				$(".wp-bulk-actions-label-text:checked").each(function(i) {
			    wp_post_type.push($(this).val());
			});
			$("#wp_posts_action_save_btn").attr('disabled','disabled');	
      		jQuery('#wp_posts_action_save_btn').html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading... ');
			$.ajax({
         		type : "post",
         		dataType : "json",
         		url : wppostajax.ajaxurl,
         		data : {
         			action : 'wp_posts_action_save',
         			formdata : wp_post_type,
         			nonce: wppostajax.nonce 
         		},
         		success: function(response) {
         			if(response.data.status == '0'){
         				var response_status = 'wp-bulk-action-error';
         			} else {
         				var response_status = 'wp-bulk-action-success';
         			}
         			jQuery('#wp_posts_action_save_btn').html('Save');
         			$('.wp-pb-action-inner-contant-header h4').after('<span id="bulk-action-message" class="'+response_status+'">'+response.data.message+'</span>');
         			setTimeout(function () { 
         				$('#bulk-action-message').remove();
         				$("#wp_posts_action_save_btn").removeAttr('disabled');
         				 }, 
         			3000);
         		}
      		})   
		})

	 	$(".wp-bulk-actions-label-all").change(function(){
		    if(this.checked){
		      $(".wp-bulk-actions-label-text").each(function(){
		        this.checked=true;
		      })              
		    }else{
		      $(".wp-bulk-actions-label-text").each(function(){
		        this.checked=false;
		      })              
		    }
		  });

		  $(".wp-bulk-actions-label-text").click(function () {
		    if ($(this).is(":checked")){
		      var isAllChecked = 0;
		      $(".wp-bulk-actions-label-text").each(function(){
		        if(!this.checked)
		           isAllChecked = 1;
		      })              
		      if(isAllChecked == 0){ $(".wp-bulk-actions-label-all").prop("checked", true); }     
		    }else {
		      $(".wp-bulk-actions-label-all").prop("checked", false);
		    }
		  });
		
	})
})( jQuery );
