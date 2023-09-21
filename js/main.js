$(document).ready(function() {
    "use strict";

    // $(document).click(function(e) {
    //     var search = $(".dropdown_menu");
    //     var tooltip = $(".header_block_btn");
    //     if (!search.is(e.target) && search.has(e.target).length === 0 && !tooltip.is(e.target) && tooltip.has(e.target).length === 0) {
    //         $(".header_block_btn").removeClass("active");
    //         $(".dropdown_menu").removeClass("active");
    //     }
    // });

    $(".main_block_right_item").on("mouseenter", function() {
      $(".main_block_right_item").removeClass("active");
      $(this).addClass("active");
    })

    $(".offer_block_nav_item").click(function() {
      var attr = $(this).attr("data-target");
      $(".offer_block_nav_item").removeClass("active");
      $(this).addClass("active");
      $(".offer_block_content_item").removeClass("active");
      $(`#${attr}`).addClass("active");
    });

    var allSlide = $(".projects_wrap_slider_item").length;
    $("#slideAll").text(allSlide);    

    $('.clients_block_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      speed: 500,
      autoplay: false,
          fade: true,
      prevArrow: $('.clients_block_arrows_left'),
          nextArrow: $('.clients_block_arrows_right')
    });

    $('.projects_wrap_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      speed: 500,
      autoplay: false,
      fade: true,
      prevArrow: $('.projects_arrows_left'),
      nextArrow: $('.projects_arrows_right')
	});

    $('.projects_wrap_slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
      var count = currentSlide + 1;
      $("#slideCurrent").text(count);
    });

    $('.industry_block_right_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      speed: 500,
      autoplay: false,
      prevArrow: $('.industry_arrows_prev'),
          nextArrow: $('.industry_arrows_next'),
          responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
              slidesToScroll: 1
                }
              }
          ]
      });

    $('.resources_block_right_slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		speed: 500,
		autoplay: false,
		prevArrow: $('.resources_block_right_nav_arrows_left'),
      	nextArrow: $('.resources_block_right_nav_arrows_right'),
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
		        slidesToScroll: 1
              }
            }
        ]
	});

    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );
    
    $('.resources_block_right_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
        $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
        $progressBarLabel.text( calc + '% completed' );
    });

});