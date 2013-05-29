var $modal = $("#about_ayurveda_modal");

$('#about_ayurveda').on('click', function(){
  // create the backdrop and wait for next modal to be triggered
  console.log("clicked");
  
  $('body').modalmanager('loading');
  
	setTimeout(function(){
	     $modal.load('ajax_content/modal.html', '', function(){
	      $modal.modal();
	    });
	  }, 1000);
});

var $modal = $("#ayurvedic_centers_modal");

$('#ayurvedic_centers').on('click', function(){
  // create the backdrop and wait for next modal to be triggered
  console.log("clicked");
  
  $('body').modalmanager('loading');
  
	setTimeout(function(){
	     $modal.load('ajax_content/modal.html', '', function(){
	      $modal.modal();
	    });
	  }, 1000);
});