// main.js

// 언어 토글
const topMenuDD = document.querySelectorAll("dl.topMenu > dd");

topMenuDD[3].addEventListener("click", e => {
   e.currentTarget.classList.toggle("on");
   if(e.currentTarget.classList.contains("on")) { 
      e.currentTarget.children[0].setAttribute("title","언어선택 닫기"); 
   } else { // 클래스 on이 없으면
      e.currentTarget.children[0].setAttribute("title","언어선택 열기"); 
   };
});


// 주메뉴
const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll("nav.gnb > ul > li"); // gnb 메뉴
const subMenu = document.querySelectorAll("nav.gnb > ul > li > ul");  // 드롭다운 메뉴

for (let i = 0; i < gnbMenu.length; i++) {
   (function(index) {
      // mouseover
      gnbMenu[index].addEventListener("mouseover", () => {
         headerWrap.classList.add("on");

         // 현재 인덱스의 subMenu에 클래스 추가
         subMenu[index].classList.add("block");

         // 언어선택 클래스 제거
         if(topMenuDD[3].classList.contains("on")){
            topMenuDD[3].classList.remove("on");
         };
      });

      // mouseout
      gnbMenu[index].addEventListener("mouseout", () => {
         headerWrap.classList.remove("on");

         // 현재 인덱스의 subMenu에 클래스 제거
         subMenu[index].classList.remove("block");
         topMenuDD[3].classList.remove("on");
      });
   })(i);
};

// content1_company 물방울 배경이 마우스따라 움직이기
$('.cBg_inner').on("mousemove", function(e) {
   const width = $(window).width();
   const height = $(window).height();

   const moveX = (e.pageX - width / 2) / width;
   const moveY = (e.pageY - height / 2) / height;

   const backMoveX = -moveX * 20;
   const backMoveY = -moveY * 10;

   $('.cBg_bg_back').css({
      transform: `translate(${backMoveX}px, ${backMoveY}px)`
   });
});

// content2 - 브랜드 swiper
var swiper3 = new Swiper(".mySwiper3", {
   grabCursor: true, //커서가 grab모양
   centeredSlides: true, //센터모드
   slidesPerView: "3", //보여질 갯수
   threshold:100, //마우스 스와이프 민감도
   initialSlide: 1, // 중간 슬라이드부터 시작
   
   autoplay:{
      delay: 2500, //시간설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
   },
   coverflowEffect: {
     rotate: 0,
     stretch: 0,
     depth:250,
     slideShadows:false,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable : true,  // 버튼 클릭 여부
   },
});
 
//  brand ul 해당 챕터만 보여지는 방법
  $(".content2_brand .swiper").hide(); // 첫번째 빼고 나머지 전부 안보여지게 설정
  $(".all").show();

  // 탭메뉴 클릭 시, 클릭한 메뉴와 같은 클래스의 swiper보여주기
  $(".brand_list li").click(function(event){
      event.preventDefault();
      // Remove active class from all tabs
      $(".brand_list li a").removeClass("on");
      // Add active class to the clicked tab
      $(this).find("a").addClass("on");
      // Hide all sliders
      $(".content2_brand .swiper").hide();
      var className = $(this).attr("class");
      $("." + className).show();
      // Update swiper
      swiper3.update();
  });
  
  
// content3_news - 카드 슬라이드
var swiperNewList = new Swiper(".mySwiper", {
   spaceBetween: 50,
   slidesPerView: 4,
   freeMode: true,
   watchSlidesProgress: true,
});

var swiperNews = new Swiper(".mySwiper2", {
   spaceBetween: 10,

   thumbs: {
      swiper: swiperNewList,
   },
});


// footer
// siteMap
const comMap = document.querySelectorAll(".footer_company > div > ul > li > div.min_map");
const footerMap = document.querySelectorAll(".site_map > li > ul > li > div.min_map");

function siteMap(name) {
   name.forEach(item => {
      // mouseover
      item.addEventListener("mouseover", e => {
         e.preventDefault();
   
         item.children[1].classList.add("on");
      });
      // mouseout
      item.addEventListener("mouseout", e => {
         e.preventDefault();
   
         item.children[1].classList.remove("on");
      });
   });
};
siteMap(comMap);
siteMap(footerMap);

// dl_toggle
const mapToggle = document.querySelectorAll(".footer_inner > dl > dd.map_toggle");
const minToggle = document.querySelectorAll(".footer_inner > dl > dd.map_toggle > ul")

mapToggle.forEach(item => {
   item.addEventListener("click", e => {
      e.preventDefault();
      item.classList.toggle("on");
      item.children[1].classList.toggle("on");

      if(e.currentTarget.classList.contains("on")) {
         item.children[0].setAttribute("title", "닫기");
      } else {
         item.children[0].setAttribute("title", "열기");
      };
   });
});

