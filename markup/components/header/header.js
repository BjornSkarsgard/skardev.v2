import $ from "jquery";
$('.header__title').click( function() {
    if($('.header').hasClass('header--scroll')) {
        $('.header').removeClass('header--scroll')
    }
    else {
        $('.header').addClass('header--scroll')
    }
})
