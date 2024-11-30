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
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
