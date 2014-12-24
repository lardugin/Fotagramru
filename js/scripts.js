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
  });

  $('.instagramm-toggle__link').on('click', function(){

    $('.instagramm-toggle__link').removeClass('active');
    $(this).addClass('active');

    $('.images-list').hide();
    $('.' + $(this).attr('data-class')).show();

  });


  var one = new CROP;
  one.init(".default");
  one.loadImg("images/test-img.jpg");
  $("body").on("click", ".cropButton", function() {
    $("canvas").remove();
    $(".default").after('<canvas width="240" height="240" id="canvas"/>');
    var e = document.getElementById("canvas").getContext("2d"),
      t = new Image,
      n = coordinates(one).w,
      r = coordinates(one).h,
      i = coordinates(one).x,
      s = coordinates(one).y,
      o = 240,
      u = 240;
    t.src = coordinates(one).image;
    t.onload = function() {
      e.drawImage(t, i, s, n, r, 0, 0, o, u);
      $("canvas").addClass("output");/*.delay("4000").fadeOut("slow")*/
      var url = canvas.toDataURL();
      $('.test-img').attr('src', url);
      $('.photo-editor').removeClass('show');


    }
  });



  $('.edit-btn').on('click', function(){

    $('.photo-editor').addClass('show');

  });

  $('.photo-editor-close').on('click', function(){

    $('.photo-editor').removeClass('show');

  });


});
