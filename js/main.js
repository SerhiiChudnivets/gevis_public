
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
$(document).ready(function(){
    lazyload();
});
$(window).scroll(function(){
    lazyload();
})
function lazyload(){
    $('[data-counter]').each(function(){
        if(isScrolledIntoView($(this))){
            if (!$(this).hasClass('scroll')){
                counter(this.getAttribute('data-counter'), this);
            }
        }
    });
}
function isScrolledIntoView(elem){
    let $elem = $(elem);
    let $window = $(window);
    let docViewTop = $window.scrollTop();
    let docViewBottom = docViewTop + $window.height();
    let elemTop = $elem.offset().top;
    let elemBottom = elemTop + $elem.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
function counter(data,element) {
    let start = 0;
    let finish= data;
    let timeout;
    if (data>100){
        timeout = 10;
    }
    else{
        timeout=60;
    }
    $(element).addClass('scroll');
    let count = setInterval(function (l) {
        start++;
        $(element).html(start);
        console.log(start);
        if (start==finish){
            clearInterval(count);
        }
    }, timeout)
}