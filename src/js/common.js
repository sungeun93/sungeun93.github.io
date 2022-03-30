$(document).ready(function(){

    $(window).on("scroll",function(){
        if($(window).scrollTop()){
            $("header").addClass("active");
        }else{
            $("header").removeClass("active");
        }
    });

    $('nav ul li').click(function(){
        var idx = $(this).index() + 1;
        var offsetTop = $('main section').eq((idx)).offset().top - 66;
        $('html').animate({
            scrollTop: offsetTop - 50
        },2000)
    })
});