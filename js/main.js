$(function() {

    $('.slider__inner').slick({
        arrows: false,
        dots: true,

    });


    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/ar-left.svg" alt="ar-left"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/ar-right.svg" alt="ar-right"></button>',
    });
     
});