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


  $('.edit').on('click', function(){

    $('.photo-editor').addClass('show');

  });

  $('.photo-editor-close').on('click', function(){

    $('.photo-editor').removeClass('show');

  });


  //carousel

  var resizeTimer;
  var carousel = $('.preview-carousel-inner');

  function initCarousel() {

    carousel.trigger('destroy', true);

    carousel.carouFredSel({
      circular: false,
      infinite: false,
      auto 	: false,
      mousewheel: true,
      swipe		: {
        onTouch		: true,
        onMouse		: true
      },
      pagination	: ".studio-preview-nav-inner"
    });

    $('.photos-required').text( $('.preview-carousel-slide li').length );

    $('.caroufredsel_wrapper').outerWidth(
      $('.content__right').outerWidth() -
      ( parseInt( $('.studio-preview-wrap').css('padding-left') ) * 2 ) +
      'px'
    );

  }

  if ( carousel.length ){

    initCarousel();

  }

  // reinit size on resize
  $(window).resize( function(){

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initCarousel, 100);

  });



  //fixed studio

  var studio = $('.studio');
  var studioMaxTopOffset = $('.content').outerHeight() - studio.outerHeight() + $('.content').offset().top;

  $(window).scroll(function(){

    var winScrollOffset = $(window).scrollTop();

    var studioTop =  winScrollOffset >= studioMaxTopOffset ? studioMaxTopOffset : winScrollOffset;

    if ( winScrollOffset >= $('.content').offset().top ) {

      studio
        .addClass('fixed')
        .css('top', studioTop + 'px');



    } else {

      studio.removeClass('fixed').css('top',0);

    }

  });


  //crop image
  var foo = new CROP();

  foo.init({
    container: '.default',
    image: './images/test-img.jpg',
    width: 300,
    height: 300,
    mask: false,
    zoom: {
      steps: 0.01,
      min: 1,
      max: 5
    }

  });

  $("body").on("click", ".cropButton", function() {

    var cropedImg = foo.data(300, 300, '.png').image;

      $('.test-img').attr('src', cropedImg);
      $('.photo-editor').removeClass('show');

  });

  // crop Image reinit size
  var cropContMainWidth = $('.default').outerWidth();
  var cropContInner = $('.crop-container');

  cropContInner.outerHeight( cropContMainWidth).outerWidth( cropContMainWidth );

  $(window).resize( function(){

    var cropContMainWidth = $('.default').outerWidth();
    var cropContInner = $('.crop-container');

    cropContInner.outerHeight( cropContMainWidth).outerWidth( cropContMainWidth );

  });




});
