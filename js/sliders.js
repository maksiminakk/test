$(document).ready(function () {
    $('.intro-slider').slick({
        slidesToShow: 1,
        dots: true,
        responsive: [{
                breakpoint: 492,
                settings: {
                    // slidesToShow: 1.1,
                    // slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    arrows: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.product-card__images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumbs'
      });
      $('.thumbs').slick({
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        asNavFor: '.product-card__images',
        focusOnSelect: true
      });

    function resizeWindow() {
        if ($(window).width() < 492) {
            $('.certificates__content').slick({
                centerMode: true,
            });
            $('.terms__content').slick({
                centerMode: true,
            });
        } else {

        }
    }


    resizeWindow();


    $(window).resize(function () {
        resizeWindow();
    });
});