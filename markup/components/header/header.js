import $ from "jquery";
$('body').click( function() {
    if($('.header').hasClass('header--scroll')) {
        $('.header').removeClass('header--scroll')
    }
    else {
        $('.header').addClass('header--scroll')
    }
})
