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

  // upload-dropdown

  $('.upload-dropdown-holder').on( 'click', function(){

    if ( !$(this).hasClass('active') ) {

      $('.upload-dropdown-menu').addClass('active');
      $(this).addClass('active');
      $('.upload-place__content').addClass('overlay');



    } else {

      $('.upload-dropdown-menu').removeClass('active');
      $(this).removeClass('active');
      $('.upload-place__content').removeClass('overlay');

    }

  });


  $('#selectInstagram').on('click', function(){

    $('.upload-dropdown-holder').hide().removeClass('active');
    $('.upload-dropdown-menu').removeClass('active');
    $('.upload-dropdown-holder.type_instagram').show();
    $('.upload-place__content').removeClass('overlay');

    $('.upload-dropdown-menu__item').removeClass('selected');
    $(this).addClass('selected');

    $('.upload-place-select').hide();
    $('.upload-place-select.type_instagram').show();

  });

  $('#selectComputer').on('click', function(){

    $('.upload-dropdown-holder').hide().removeClass('active');
    $('.upload-dropdown-menu').removeClass('active');
    $('.upload-dropdown-holder.type_computer').show();
    $('.upload-place__content').removeClass('overlay');

    $('.upload-dropdown-menu__item').removeClass('selected');
    $(this).addClass('selected');

    $('.upload-place-select').hide();
    $('.upload-place-select.type_computer').show();

  });


  $('.submenu-trigger').hover(function(){
    $('.curtain').addClass('curtain-active');
  }, function() {
    $('.curtain').removeClass('curtain-active');
  })

});
