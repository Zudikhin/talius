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
    });

    $(".dealer_block_sidebar_item_switcher").click(function() {
      $(this).toggleClass("active");
    })

    $(".dropdown_mob_block_content_show_btn").click(function() {
      $(".dropdown_mob_block_content_show").removeClass("active");
      $(".dropdown_mob_block_content_menu").removeClass("hide");
    });

    $(".dropdown_mob_block_content_menu_item_drop").click(function() {
      var attr = $(this).attr("data-target");
      $(".dropdown_mob_block_content_menu").addClass("hide");
      $(`#${attr}`).addClass("active");
    });

    if ($(window).width() > 1199) {
      $(".header_block_right_drop").click(function() {
        $(this).toggleClass("active");
        $(".dropdown_desktop").toggleClass("active");
        $(".header_block_left ul").toggleClass("active");
        $("body").toggleClass("scroll");
      });
    } else {
      $(".header_block_right_drop").click(function() {
        $(this).toggleClass("active");
        $(".dropdown_mob").toggleClass("active");
        $("body").toggleClass("scroll");
        $(".dropdown_mob_block_content_menu").removeClass("hide");
        $(".dropdown_mob_block_content_show").removeClass("active");
      });
    }
    
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

    var allSlideEnergy = $(".energy_efficiency_slider_block_wrap_item").length;
    $(".energy_slider_all").text(allSlideEnergy);

    $('.energy_efficiency_slider_block_wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      speed: 500,
      autoplay: false,
      fade: true,
      prevArrow: $('.energy_efficiency_slider_arrows_left'),
      nextArrow: $('.energy_efficiency_slider_arrows_right')
	  });

    $('.energy_efficiency_slider_block_wrap').on('afterChange', function(event, slick, currentSlide, nextSlide) {
      var count = currentSlide + 1;
      $(".energy_slider_curr").text(count);
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

    if($(window).width() < 1024) {
      $('.habitat_main_list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        speed: 500,
        autoplay: false,
        prevArrow: $('.habitat_main_nav_arrows_left'),
        nextArrow: $('.habitat_main_nav_arrows_right'),
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
    }

    var $progressBarHabitat = $('.habitat_main_nav_progress');
    var $progressBarLabelHabitat = $( '.habitat_main_nav_slider__label');

    $('.habitat_main_list').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      $progressBarHabitat
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
      $progressBarLabelHabitat.text( calc + '% completed' );
    });
    
    $(".faq_block_right_item_title").click(function() {
      $(this).toggleClass("active");
      $(this).parent().find(".faq_block_right_item_block").slideToggle();
    });


    $('.industry_solutions_list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      speed: 500,
      autoplay: false,
      prevArrow: $('.industry_solutions_nav_arrows_left'),
      nextArrow: $('.industry_solutions_nav_arrows_right'),
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

    var $progressBarIndusol = $('.industry_solutions_nav_progress');
    var $progressBarLabelIndusol = $( '.industry_solutions_nav_slider__label');

    $('.industry_solutions_list').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      $progressBarIndusol
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
      $progressBarLabelIndusol.text( calc + '% completed' );
    });


    $('.offers_block').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      speed: 500,
      autoplay: false,
      prevArrow: $('.offers_nav_arrows_left'),
      nextArrow: $('.offers_nav_arrows_right'),
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

    var $progressBarOffers = $('.offers_nav_progress');

    $('.offers_block').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      $progressBarOffers
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    });

    $('.management_block_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      speed: 500,
      autoplay: false,
      prevArrow: $('.management_block_nav_arrows_left'),
      nextArrow: $('.management_block_nav_arrows_right'),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

    var $progressBarManagement = $('.management_block_nav_progress');

    $('.management_block_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      $progressBarManagement
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    });


  const inViewport = (elem) => {
    let allElements = document.getElementsByClassName(elem);
    let windowHeight = window.innerHeight;
    const elems = () => {
        for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
            let viewportOffset = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
            let top = viewportOffset.top;  //  get the offset top
            if(top < windowHeight){  //  if the top offset is less than the window height
                allElements[i].classList.add('animation');  //  add the class
            } else{
                allElements[i].classList.remove('in-viewport');  //  remove the class
            }
        }
    }
    elems();
    window.addEventListener('scroll', elems);
  }

  inViewport("anime");

});