
( function() {

  var youtube = document.querySelectorAll( ".youtube" );

  for (var i = 0; i < youtube.length; i++) {

  var source = "https://i.ytimg.com/vi/j1eGhpiqDAc/maxresdefault.jpg";
  var image = new Image();
  image.src = source;
  image.addEventListener( "load", function() {
  youtube[ i ].appendChild( image );
  }( i ) );

  youtube[i].addEventListener( "click", function() {

  var iframe = document.createElement( "iframe" );

  iframe.setAttribute( "frameborder", "0" );
  iframe.setAttribute( "allowfullscreen", "" );
  iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

  this.innerHTML = "";
  this.appendChild( iframe );
  } );
  };

  } )();

  $(window).resize(function() {
    gridAdjust(".info-features-mobile-slider .feature");
    gridAdjust(".info-benefits-mobile-slider .benefit");
    gridAdjust(".info-features-mobile-slider .info-card");
  
  });
  
  $(window).on('load', function() {
    gridAdjust(".info-features-mobile-slider .feature");
    gridAdjust(".info-benefits-mobile-slider .benefit");
    gridAdjust(".info-testimonials-mobile-slider .info-card");
  
  
  //     if ($(window).width() < 767) {
  //       gridAdjust(".features-card .info-list-item");
  //    }
    });


  $(document).ready(function(){

    mobileSlider(".info-features-mobile-slider", 1, true, false, 767);
    mobileSlider(".info-benefits-mobile-slider", 1, true, false, 767);
    mobileSlider(".info-testimonials-mobile-slider", 1, true, false, 767);
    

    const messages = [
        "REAL-TIME",
        "HASSLE- FREE"
    ];

    let currentIndex = 0;
    setInterval(function(){
        $('#slide-text').slideUp(1000, function(){
            currentIndex = (currentIndex + 1) % messages.length;
            $('#slide-text').text(messages[currentIndex]).slideDown(1000);
        });
    }, 2000); // Change text every 4 seconds

});

var mobileSlider = ($slidername, $slidesToShow, $dots, $arrows, $breakpoint) => {

    var slider = $($slidername);
      var settings = {
        mobileFirst: true,
        slidesToShow: $slidesToShow,
        slidesToScroll: 1,
        dots: $dots,
        arrows: $arrows,
        autoplay: false,
        autoplaySpeed: 4000,
        infinite: false,
        responsive: [
          {
            breakpoint: $breakpoint,
            settings: "unslick"
          }
        ]
      };
  
      slider.slick(settings);
      // slider.on('laod', function(event, slick, currentSlide, nextSlide){
      //     let actives = slider.find(".slick-active").addClass('balaraju');
      // });
      slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
          slider.find(".slick-slide").removeClass('works');
          slider.find('.slick-current').addClass('works');
          slider.find('.slick-current').toggleClass("hovered");
       });
  
      $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
  
          return;
        }
        if (!slider.hasClass("slick-initialized")) {
          return slider.slick(settings);
        }
      });
  }

  function gridAdjust(targertSteing) {
	// if ($(window).width() < 767) {
	var targertHight = $(targertSteing);
	  targertHight.css('height', 'auto');
	   var heights = [];
	   targertHight.each(function() {
		 var elem = $(this);
		 var height = elem.outerHeight();
		 heights.push(height);
	   });
	   heights = heights.sort(function(a, b) {
		 return b - a
	   });
	   var tallest = heights[0];
	   targertHight.css('height', tallest + 'px');
	// }
  }
