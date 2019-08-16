$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        dots: 1,
        nav: 0,
        loop: 1,
        autoplay: 1,
        autoplayTimeout: 5000,
        autoplayHoverPause: 1
    });

    $('.header__button-menu').click(function () {
        $('.menu').animate({
            'width': 'toggle'
        });
        $('.menu__item').toggleClass("mobile");

        //$('.header__button-menu i').toggleClass('icon-menu').toggleClass('icon-git');
    });

    $(document).on('click touchstart', '.mobile a', function () {
        $('.menu').animate({
            'width': 'toggle'
        });
        $('.menu__item').toggleClass("mobile");
    });

    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({
            scrollTop: dn
        }, 1000);
    });

});