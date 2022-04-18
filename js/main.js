$(function() {

    $(".header__nav a, .header__logo, .first-screen__anchor, .footer a").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.nav__button, .nav__list-item a').click(function() {
        $('body').toggleClass('body__open-menu--active');
        $('.header__top-inner').toggleClass('header__top-inner--active');
        $('.nav__button').toggleClass('nav__button__open-menu');
        $('.nav__list').toggleClass('nav__list__open-menu');
    });

    var mixer = mixitup('.portfolio__content');

});
