$(document).ready(function(){

    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        loop: true,
        rotate: 0,
        cardsEffect: {
            rotate: 0
        }
    });

    
    swiper.on('slideChange', function () {

        var active = $('.swiper-slide-active')
        var idx = $(active).attr('data-idx');
        $('.textarea dl').eq(idx).addClass('on').siblings().removeClass('on');

        console.log('현재 인덱스 넘버는? ' + idx);
        console.log('slide changed');
    });
});