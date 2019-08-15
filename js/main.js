
$(document).ready(function(){
    $('.slider__laptop').slick({
});
    $('.close__btn').click(function () {
        $('.popup').removeClass('open')
    });
    $('.open-popup').click(function () {
        $('.popup').addClass('open')
    })
    $(".burger").click(function () {
        $(".mobile__menu").addClass('show');
    });
    $(".mobile__menu-close, .mobile__menu-item").click(function () {
        $(".mobile__menu").removeClass('show');
    });
});
