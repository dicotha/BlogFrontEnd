$(document).ready(function(){
	var screenSize = $(window).width();
	if(screenSize < 768){
		$('.menuTop').html('');
	}
});

/*top news*/
$(".hover").leftSlideDefault("#204c57", "Read");
$(".hover2").upSlideDefault("#204c57", "Read");
$(".hover3").rightSlideDefault("#204c57", "Read");
$(".hover4").leftSlideStyle1("#204c57", "Read");
$(".hover5").downSlideStyle1("#204c57", "Read");
