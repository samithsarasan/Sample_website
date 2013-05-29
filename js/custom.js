var $modal = $("#culture_modal");

$('#performance').on('click', function(){
  // create the backdrop and wait for next modal to be triggered
  console.log("clicked");
  
  $('body').modalmanager('loading');
  
	setTimeout(function(){
	     $modal.load('ajax_content/modal.html', '', function(){
	      $modal.modal();
	    });
	  }, 1000);
});