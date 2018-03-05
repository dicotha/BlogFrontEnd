$('#myCarousel').carousel({
	        //pause: 'hover',
	        //interval: 7000
});
$('#myCarousel').on('slide.bs.carousel', function () {
  $(".caption-Text").hide(); 
  setTimeout(function(){ 
  	$(".caption-Text").show();
  	$(".caption-Text").addClass("animated slideInLeft"); 
  }, 1000);
  
});