$(document).ready(function(){
    $('#gnb').mouseenter(
        function() {
            $('#snb').slideDown();
        }
    );

    
    $('#gnb').mouseleave(
        $('#snb').hover(
            function() {
                $('#snb').stop().slideDown();;
            },
            function() {
                $('#snb').slideUp();
            }

        ),
        function() {
            $('#snb').slideUp();
        }
    );



    var swiper = new Swiper(".container", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
    });

    
});