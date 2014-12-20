$(document).ready(function(){

  //appearance of menu on mobile + background shading
  var menu = $('.menu');

  $('.toggle-nav').on( 'click', function(){

    if ( !menu.hasClass('active-mobile-menu') ) {

      menu.addClass('active-mobile-menu');

      $('.curtain').addClass('curtain-active');

    } else {

      menu.removeClass('active-mobile-menu');

      $('.curtain').removeClass('curtain-active');

    }

  });

});
