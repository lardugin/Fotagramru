$(document).ready(function(){

  var menu = $('.menu');

  $('.toggle-nav').on( 'click', function(){


    console.log('toggle-nav click');

    if ( !menu.hasClass('active-mobile-menu') ) {

      menu.addClass('active-mobile-menu');

      $('.curtain').addClass('active');

    } else {

      menu.removeClass('active-mobile-menu');

      $('.curtain').removeClass('active');

    }

  });



});
