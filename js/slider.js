$(document).ready(function() {
    $('.faq-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear',
        slidesToShow: 4,
        mobileFirst: true
    });
});