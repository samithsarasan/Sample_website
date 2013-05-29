$(document).ready(function()
{
  $('#tour_planner-button').click(function() {
    if($(this).css("margin-left") == "900px")
    {
        $('.tour_planner').animate({"margin-left": '-=900'},3000);
        $('#tour_planner-button').animate({"margin-left": '-=900'},3000);
    }
    else
    {
        $('.tour_planner').animate({"margin-left": '+=900'},3000);
        $('#tour_planner-button').animate({"margin-left": '+=900'},3000);
    }


  });
 });  
 
 
 /*modal */
var $modal = $("#about_kerala_modal");

$('#about_kerala').on('click', function(){
  // create the backdrop and wait for next modal to be triggered
  console.log("clicked");
  
  $('body').modalmanager('loading');
  
	setTimeout(function(){
	     $modal.load('ajax_content/explore_kerala/about_kerala.html', '', function(){
	      $modal.modal();
	    });
	  }, 1000);
});   


var $modal = $("#destinations_modal");

$('#destinations').on('click', function(){
  // create the backdrop and wait for next modal to be triggered
  console.log("clicked");
  
  $('body').modalmanager('loading');
  
	setTimeout(function(){
	     $modal.load('ajax_content/explore_kerala/destinations.html', '', function(){
	      $modal.modal();
	    });
	  }, 1000);
});   
 