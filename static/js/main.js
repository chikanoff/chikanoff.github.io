;
// Начинать писать отсюда!!!!

  $(document).ready(function() {
  	$('.js-price__slider').slick({
  		infinite: false,
  		speed: 300,
  		slidesToShow: 3,
  		slidesToScroll: 0,
  		responsive: [{
  	      breakpoint: 1024,
  	      settings: {
  	        slidesToShow: 3,
  	        slidesToScroll: 3,
  	        infinite: true,
  	        dots: true
  	      }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.js-review-slider').slick({
    dots: true,
    nextArrow: '.review-slider__next',
    prevArrow: '.review-slider__prev'
  });

  $('.nav-mobile').click(function(){
    $(this).toggleClass('active');
    $('.main-nav__list').toggleClass('mobile-show');
  });

  $('.popup-link').magnificPopup({
    type: 'inline',
  });
  
});