$(document).ready(function(){

    $(window).on("scroll",function(){
        if($(window).scrollTop()){
            $("header").addClass("active");
        }else{
            $("header").removeClass("active");
        }
    });

    $('#RESTAURANT .flex > li').hover(
        function() {
            $(this).addClass('active').siblings().addClass('opacity');
        },
        function() {
            $(this).removeClass('active').siblings().removeClass('opacity');
        }
    );

    $('nav ul li').click(function() {
        var idx = $(this).index();
        var offesetTop = $('main section').eq(idx).offset().top;
        $('html').animate({
            scrollTop: offesetTop - 60
        }, 3000
        )
    })
    
});