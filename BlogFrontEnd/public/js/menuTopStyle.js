/*mouse button*/
$("div").scroll2Section({
			  menu:'.scrollDownHome',
			 offsetTop:55

		});
$("div").scroll2Section({
        menu:'.btnGotoTop',
       offsetTop:0

    });
/*end*/








/*menu style*/
var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     if (scrollTop >= 250) {

      /*downscale menu in top*/
      $('.fa-bars').addClass('burgerSmall');
      $('.fa-bars').removeClass('burger');
      /*end*/

      /*downcale menu logo in top*/
      $('#logo').addClass('logoSmall');
      $('#logo').removeClass('logo');
      /*end*/

      /*show menu in top*/
      $(".btnGotoTop").addClass('animated fadeInDown').show();
      $('.btnGotoTop').removeClass('fadeOut');
      /*end*/

      /*show menu in top*/
      $(".menuTop").addClass('animated fadeInDown').show();
      $('.menuTop').removeClass('fadeOut');
      /*end*/

    } else if (scrollTop < 250) {
      
      /*upnscale menu in top*/
      $('.fa-bars').addClass('burger');
      $('.fa-bars').removeClass('burgerSmall');
      /*end*/

      /*upscale menu in top*/
      $('#logo').addClass('logo');
      $('#logo').removeClass('logoSmall');
      /*end*/

      /*hide menu in top*/
      $('.menuTop').removeClass('fadeInDown');
      $('.menuTop').addClass('fadeOut');
      /*end */

      /*hide btn go to top*/
      $('.btnGotoTop').removeClass('fadeInDown');
      $('.btnGotoTop').addClass('fadeOut');
      /*end */


      
    } 
    
    
  }); 
 /*end*/
