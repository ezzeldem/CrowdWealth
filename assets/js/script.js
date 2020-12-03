$(document).ready(function(){
   // comment slider
   $(".comment-slider").slick({
    dots: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: "<div class='arrow-slider-header left-arrow'> <i class='fas fa-arrow-left'></i></div>",
    nextArrow: "<div class='arrow-slider-header right-arrow'> <i class='fas fa-arrow-right'></i></div>",
});

    // opne sub menu
    $('.nav-section .mobile-menu ul li.has-chiled a').click(function(){
        $('.nav-section .mobile-menu ul li.has-chiled .sub-menu').slideToggle();
    });
    // opne menu
    $('.nav-section .menu-icon i').click(function(){
        $('.mobile-menu').addClass('opne-menu');
        $('body').addClass('body-over');
        $('.over-lay').show();
    });


    // close menu
    $('.nav-section .mobile-menu .close-menu i , .over-lay').click(function(){
        $('.mobile-menu').removeClass('opne-menu');
        $('body').removeClass('body-over');
        $('.over-lay').hide();
    });
    










    $(".partners-slide").slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 1000,
        centerMode: true,
        centerPadding: '20px',
        arrows:false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 772,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });




});