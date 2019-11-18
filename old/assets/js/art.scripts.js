
/*=======================================================
1. Page Preloader
=======================================================
*/
function lcpagepreloader() {
  $('.status').fadeOut();
  $('.page-preloader').delay(240).fadeOut('slow');
};
/*
=======================================================
2. Sticky Header
=======================================================
*/
function lcstickyheader() {
  $(window).scroll(function() {
    var offsetscroll = $(window).scrollTop();
    var offsetheader = ($(".top-bar").height() + 20 );
    if(offsetscroll  > offsetheader) {
      $("#header").addClass("sticky-header");
    } else {
      $("#header").removeClass("sticky-header");
    }
  });
};
/*
=======================================================
3. Page Scroll Animation
=======================================================
*/
function lcpagescrollanimation() {
  $('.page-scroll').bind('click', function (e) {
    var $anchor = $(this);
    if ($('#header').hasClass( 'sticky-header' )) {
      var soffsetenter = $('.main-bar').height();
    } else {
      var soffsetenter = ($('.main-bar').height()) - 20;
    };
    var soffsettop = $($anchor.attr('href')).offset().top;
    var offsetall = soffsettop - soffsetenter;
    $('html, body').stop().animate({
      scrollTop: offsetall
    }, 1500, 'easeInOutExpo');
    e.preventDefault();
  });
};
/*
=======================================================
4. Scroll Spy
=======================================================
*/
function lcscrollspy() {
  if ($('#header').hasClass( 'sticky-header' )) {
    var lcspyoffset = ($('.main-bar').height()) + 3;
  } else {
    var lcspyoffset = ($('.main-bar').height()) - 17;
  };
  $('body').scrollspy({ target: '.main-bar', offset: lcspyoffset });
};
/*
=======================================================
5. Responsive Navigation
=======================================================
*/
function lcresponsivenav() {
  $('#menu').slicknav({
    label: 'МЕНЮ',
    prependTo:'nav',
    closeOnClick: true,
    init:function(){
      lcpagescrollanimation();
    }
  });
};
/*
=======================================================
6. Parallax Effect
=======================================================
*/
function lcparallaxeffect() {
  $('.parallax').parallax();
};
/*
=======================================================
7. Smart Header
=======================================================
*/
function lcblogsmart() {
  var $blogimageheight = $('.blog-list-2 .blog-image-holder').height();
  $(".blog-list-2 .blog-desc").css("min-height", $blogimageheight);
};
/*
=======================================================
8. Testimonial Slider
=======================================================
*/
function lctestimonialslider() {
  $('#testimonial-slider').flexslider({
    animation: "slide",
    directionNav: false
  });
};
/*
=======================================================
9. Portfolio Item Slider
=======================================================
*/
function lcportfolioitemslider() {
  $('#portfolio-item-slider').flexslider({
    animation: "slide",
    directionNav: false,
  });
};
/*
=======================================================
10. Phone Slider
=======================================================
*/
function lcphoneslider() {
  $('#phone-slider').flexslider({
    animation: "slide",
    directionNav: false,
  });
};
/*
=======================================================
11. Smart Blog
=======================================================
*/
function lcheadersmart() {
  var $headerheight = ($('#header').height()) + 3;
  $(".slideshow-section, .default-page").css("padding-top", $headerheight);
  $(".shadow-slider").css("top", $headerheight);
};
/*
=======================================================
12. WOW Animation
=======================================================
*/
function lcwowanimation() {
  wow = new WOW({
    animateClass: 'animated',
    offset: 50
  }
);
wow.init();
};
/*
=======================================================
13. SwipeBox
=======================================================
*/
function lclightbox() {
  $('.swipebox').swipebox();
};
/*
=======================================================
14. Clients Carousel
=======================================================
*/
function lcclientscarousel() {
  $('#clients-slider').owlCarousel({
    margin:8,
    loop:true,
    items:4,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    navRewind:true,
    nav : false,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    dots : false,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      480:{
        items:1,
        nav:true
      },
      600:{
        items:2,
        nav:true
      },
      768:{
        items:3,
        nav:true
      },
      1024:{
        items:4,
        nav:true,

      },
      1120:{
        items:5,
        nav:true,

      }
    },
    onInitialized: function() {
      $('.item img').show();
    }
  });
};
/*
=======================================================
15. Team Carousel
=======================================================
*/
function lcteamcarousel() {
  $('#team-slider').owlCarousel({
    margin:30,
    loop:false,
    items:4,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    navRewind: true,
    nav: false,
    dots: false,
    responsiveClass: false,
    responsive:{
      0:{
        items:1

      },
      480:{
        items:1

      },
      600:{
        items:2

      },
      768:{
        items:2

      },
      1024:{
        items:4


      },
      1120:{
        items:4


      }
    },
    onInitialized: function() {
      $('.item img').show();
    }
  });
  $('.teamnextbtn').click(function() {
    $('#team-slider').trigger('next.owl.carousel');
  });
  $('.teamprevbtn').click(function() {
    $('#team-slider').trigger('prev.owl.carousel');
  });
};
/*
=======================================================
16. Gallery Carousel
=======================================================
*/
function lcgallerycarousel() {
  $('#gallery-slider').owlCarousel({
    margin:30,
    loop:true,
    items:3,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    navRewind:true,
    nav : false,
    dots : false,
    responsiveClass:true,
    responsive:{
      0:{
        items:1

      },
      480:{
        items:1

      },
      600:{
        items:2

      },
      768:{
        items:2

      },
      1024:{
        items:3


      },
      1120:{
        items:3


      }
    },
    onInitialized: function() {
      $('.item img').show();
    }
  });
  $('.gallerynextbtn').click(function() {
    $('#gallery-slider').trigger('next.owl.carousel');
  });
  $('.galleryprevbtn').click(function() {
    $('#gallery-slider').trigger('prev.owl.carousel');
  });
};
/*
=======================================================
17. Revolution Slider
=======================================================
*/
function lcrevolutionslider() {
  $('.tp-banner').show().revolution({
    dottedOverlay:"none",
    delay:16000,
    startwidth:1170,
    startheight:500,
    hideThumbs:200,
    thumbWidth:100,
    thumbHeight:50,
    thumbAmount:5,
    navigationType:"none",
    navigationArrows:"solo",
    navigationStyle:"",
    touchenabled:"on",
    onHoverStop:"on",
    swipe_velocity: 0.7,
    swipe_min_touches: 1,
    swipe_max_touches: 1,
    drag_block_vertical: false,
    parallax:"mouse",
    parallaxBgFreeze:"on",
    parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
    keyboardNavigation:"off",
    navigationHAlign:"center",
    navigationVAlign:"bottom",
    navigationHOffset:0,
    navigationVOffset:20,
    soloArrowLeftHalign:"left",
    soloArrowLeftValign:"center",
    soloArrowLeftHOffset:20,
    soloArrowLeftVOffset:0,
    soloArrowRightHalign:"right",
    soloArrowRightValign:"center",
    soloArrowRightHOffset:20,
    soloArrowRightVOffset:0,
    shadow:0,
    fullWidth:"on",
    fullScreen:"off",
    spinner:"spinner4",
    stopLoop:"off",
    stopAfterLoops:-1,
    stopAtSlide:-1,
    shuffle:"off",
    autoHeight:"on",
    forceFullWidth:"on",
    hideThumbsOnMobile:"off",
    hideNavDelayOnMobile:1500,
    hideBulletsOnMobile:"off",
    hideArrowsOnMobile:"off",
    hideThumbsUnderResolution:0,
    hideSliderAtLimit:0,
    hideCaptionAtLimit:0,
    hideAllCaptionAtLilmit:0,
    startWithSlide:0,
    fullScreenOffsetContainer: ""
  });
};
/*
=======================================================
18. Flickr Feed
=======================================================
*/
function lcflickrfeed() {
  $('#flickrfeed').jflickrfeed({
    limit: 6,
    qstrings: {
      id: '45388974@N00'
    },
    itemTemplate:
    '<li class="col-xs-4 col-sm-4 col-md-4">' + '<a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a>' + '</li>'
  });
};
/*
=======================================================
19. Slider Price Filter
=======================================================
*/
function lcsliderpricefilter() {
  $( "#slider-price-filter" ).slider({
    range: true,
    min: 0,
    max: 5000,
    values: [ 500, 3500 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( $( "#slider-price-filter" ).slider( "values", 0 ) + " - " + $( "#slider-price-filter" ).slider( "values", 1 ) );
};
/*
=======================================================
20. Accordion
=======================================================
*/
function lcaccordion() {
  jQuery( "#collapseOne" ).parent().find( ".panel-heading" ).toggleClass( "active" );
  jQuery( "a[data-toggle='collapse']" ).click( function() {
    if( !jQuery( this ).parent().parent().hasClass( "active" ) ) {
      jQuery( ".panel-heading.active" ).toggleClass( "active" );
      jQuery( this ).parent().parent().toggleClass( "active" );
    } else {
      jQuery( this ).parent().parent().toggleClass( "active" );
    }
  });
};
/*
=======================================================
21. Custom Select
=======================================================
*/
function lccustomselect() {
  $("select").not(".selecter_callback").selecter();
  $("select.selecter_callback").selecter({
    callback: selectCallback
  });
  function selectCallback(value, index) {
    $(".callback_output").prepend("<p>VALUE: " + value + ", INDEX: " + index + "</p>");
  };
};
/*
=======================================================
22. Portfolio Effect
=======================================================
*/
function lcportfolioeffect() {
  $('.portfolio-holder .overlay_effect').mouseenter(function(e) {
    $(this).children('.bg_overlay').show().css('opacity', '0').stop().animate({opacity : '0.5', 'borderWidth': '25px'}, 600);
    $(this).children('.portfolio-zoom').show().css('opacity', '0').stop().animate({left: '50%', opacity : '1'}, 600);
    $(this).children('.portfolio-more').show().css('opacity', '0').stop().animate({right: '50%', opacity : '1'}, 600);
    $(this).children('.portfolio-title').show().css('opacity', '0').stop().animate({top: '50%', opacity : '1', 'borderWidth': '10px'}, 600);
  }).mouseleave(function(e) {
    $(this).children('.bg_overlay').stop().animate({opacity : '0', 'borderWidth': '0'}, 600);
    $(this).children('.portfolio-zoom').stop().animate({left: '-20px', opacity : '0'}, 600);
    $(this).children('.portfolio-more').stop().animate({right: '-20px', opacity : '0'}, 600);
    $(this).children('.portfolio-title').stop().animate({top: '0', opacity : '0', 'borderWidth': '0'}, 600);
  });
};
/*
=======================================================
23. Gallery Effect
=======================================================
*/
function lcgalleryeffect() {
  $('.gallery-holder .overlay_effect').mouseenter(function(e) {
    $(this).children('.border_overlay').show().css('opacity', '0').stop().animate({opacity : '1', 'borderWidth': '10px'}, 500);
    $(this).children('.bg_overlay').show().css('opacity', '0').stop().animate({opacity : '0.5'}, 500);
    $(this).children('.gallery-zoom').show().css('opacity', '0').stop().animate({bottom: '50%', opacity : '1'}, 500);
  }).mouseleave(function(e) {
    $(this).children('.border_overlay').stop().animate({opacity : '0', 'borderWidth': '0'}, 500);
    $(this).children('.bg_overlay').stop().animate({opacity : '0'}, 500);
    $(this).children('.gallery-zoom').stop().animate({bottom: '-64px', opacity : '0'}, 500);
  });
};
/*
=======================================================
24. Portfolio and Blog Isotope
=======================================================
*/
function lcportfolioblogisotope() {
  $('.portfolio-list').isotope({
    itemSelector : '.box',
    layoutMode : 'masonry',
    masonry: {}
  });
  $('.blog-list, .blog-list-2').isotope({
    itemSelector : '.box',
    layoutMode : 'masonry',
    masonry: {}
  });
};
function lcportfoliofilter() {
  $('.option-set').find('a').click(function(){
    if ( $(this).hasClass('selected') ) {
      return false;
    }
    $(this).parents('.option-set').find('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  $('.portfolio-filter a, .portfolio-filter-box .slicknav_nav a').click(function(){
    var selector = $(this).attr('data-filter');
    $('.portfolio-list').isotope({ filter: selector });
    return false;
  });
};
lcportfoliofilter();
function lcresponsivefilternav() {
  $('#pfilter').slicknav({
    label: 'FILTER',
    prependTo:'.title-box-full .portfolio-filter-box',
    closeOnClick: true,
    init:function(){
      lcportfoliofilter();
    }
  });
};
/*
=======================================================
25. Link Back Section
=======================================================
*/
function lclinkbacksection() {
  var locationInfo = window.location.href.indexOf( "#" );
  var info = window.location.href.substring( locationInfo );
  if( locationInfo > -1 ) {
    var customTimeOut = setTimeout( function() {
      if ($('#header').hasClass( 'sticky-header' )) {
        var soffsetenter = $('.main-bar').height();
      } else {
        var soffsetenter = ($('.main-bar').height()) - 20;
      };
      var soffsettop = $(window.location.href.substring( locationInfo )).offset().top;
      var offsetall = soffsettop - soffsetenter;
      $('html, body').stop().animate({
        scrollTop: offsetall
      }, 1500, 'easeInOutExpo');
      clearTimeout( customTimeOut );
    }, 500 );
  }
};

/*
=======================================================
27. Load More
=======================================================
*/

function customLoadMoreCallback() {
  jQuery(window).trigger('resize');
  lcportfolioeffect();
  lcgalleryeffect();
  lcblogsmart();
  lcparallaxeffect();
};
/*
=======================================================
28. Use Functions
=======================================================
*/
$( window ).load(function() {
  lcpagepreloader();
  lcportfolioblogisotope();
  lcblogsmart();
  lclinkbacksection();
});

$( document ).ready(function() {
  lcpagescrollanimation();
  //lcscrollspy();
  lcresponsivenav();
  lcparallaxeffect();
  lcheadersmart();
  lclightbox();
  lcclientscarousel();
  lcteamcarousel();
  lcrevolutionslider();
  lcflickrfeed();
  lcsliderpricefilter();
  lcaccordion();
  lccustomselect();
  lcportfolioeffect();
  lcgalleryeffect();
  lcresponsivefilternav();
  lctestimonialslider();
  lcportfolioitemslider();
  lcphoneslider();
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	lcstickyheader();
    lcwowanimation();
  }
  lcgallerycarousel();
});

$( window ).resize(function() {
  lcpagescrollanimation();
  //lcscrollspy();
  lcheadersmart();
  lcparallaxeffect();
  lcclientscarousel();
  lcteamcarousel();
  lcrevolutionslider();
  lcportfolioblogisotope();
  lclinkbacksection();
  lcblogsmart();
  lctestimonialslider();
  lcportfolioitemslider();
  lcphoneslider();
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	lcstickyheader();
	lcwowanimation();
  }
  lcgallerycarousel();
});
