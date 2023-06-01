/*$(document).ready(function(){
alert("hello");
});*/

$(window).on("scroll", function() {
            if($(window).scrollTop()>130) {
                  $('nav').addClass('white');
                  $('.navbar-light .navbar-nav .nav-link').addClass('black');
                  $('.logo2').css('display', 'block');
                  $('.logo1').css('display', 'none');

            }

            else {
                  $('nav').removeClass('white');
                  $('.navbar-light .navbar-nav .nav-link').removeClass('black');
                  $('.logo1').css('display', 'block');
                  $('.logo2').css('display', 'none');
            }
      })