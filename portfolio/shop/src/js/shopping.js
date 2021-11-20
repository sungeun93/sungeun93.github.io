$(document).ready(function () {
/*
    1. nav 이동
        1-1 offset();
        1-2 전역변수/지역변수
        1-3 css 추가 필요
    2. main_visual 슬라이더 구동
        2-1 관리자도구에서 bullet 사이즈/ 컬러 확인
    3. WEEKLY
        3-1 두번째 슬라이더 추가
            3-1-1 마우스 오버시 이미지 변경
                mouseenter / mouseleave
                etc7.js => attr("src", "~~")
        3-2 탭기능 추가
            3-2-1 data-tab(css추가가 필요)
  */

 //1. nav 이동
var $offset = $("nav").offset().top;
$(window).scroll(function(){
    var $top = $(window).scrollTop();
    if($offset <= $top){
        $("nav").addClass("fix");
        $("header").css("margin-bottom",$("nav").height());
    }else{
        $("nav").removeClass("fix");
        $("header").css("margin-bottom","");
    }
});

  //2. main_visual 슬라이더
var main_visual = new Swiper(".main_visual .swiper-container", {
    pagination:{
        el:".swiper-pagination"
    }
});

  //3. 탭메뉴 + 슬라이더
$(".tab_menu li a").click(function(){
    var activeTab = $(this).attr("data-tab");
    $(".tab_menu li a").removeClass("active");
    $(".tab_area .swiper-container").removeClass("active");
    $(this).addClass("active");
    $("#"+activeTab).addClass("active");
});

var swiper_01 = new Swiper("#tab_01", {
    slidesPerView: 4,
    spaceBetween: 10,
      observer:true, //해당 대상이 display가 none/none이 아닐때를 체크
      observeParent:true, // 해당 대상의 부모가 display가 none/none이 아닐때를 체크
});

var swiper_02 = new Swiper("#tab_02", {
    slidesPerView: 4,
    spaceBetween: 10,
      observer:true, //display가 none/none이 아닐때를 체크
      observeParent:true, // 해당 대상의 부모가 display가 none/none이 아닐때를 체크
});

var $img;
$(".tab_area .swiper-slide").hover(
    function() {
        $(this).children('dl').show();
    },
    function() {
        $(this).children('dl').hide();
    }
);



});