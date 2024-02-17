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

// content2 - swiper
var swiper = new Swiper(".mySwiper", {
   effect: "centered",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "3",
   coverflowEffect: {
     rotate: 0,
     stretch: 0,
     depth:50,
     modifier:15,
     slideShadows:false,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   }
 });
 

// content3_news - 카드 슬라이드
var swiper = new Swiper(".mySwiper", {
   spaceBetween: 10,
   slidesPerView: 4,
   freeMode: true,
   watchSlidesProgress: true,
   });
var swiper2 = new Swiper(".mySwiper2", {
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   thumbs: {
      swiper: swiper,
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

// brand ul 해당 챕터만 보여지는 방법
const group = document.querySelectorAll(".content2_brand>ul>li>a");
const brandList = document.querySelectorAll(".content2_brand>.swiper>ul>li")
const beer = document.querySelectorAll(".content2_brand>.swiper>ul>li.beer")
const soju = document.querySelectorAll(".content2_brand>.swiper>ul>li.soju")
const wisky = document.querySelectorAll(".content2_brand>.swiper>ul>li.wisky")
const wine = document.querySelectorAll(".content2_brand>.swiper>ul>li.wine")
const abroad = document.querySelectorAll(".content2_brand>.swiper>ul>li.abroad")
const sake = document.querySelectorAll(".content2_brand>.swiper>ul>li.sake")
const etc = document.querySelectorAll(".content2_brand>.swiper>ul>li.etc")

for(let k=0; k<group.length; k++){
   group[k].addEventListener("click",e=>{
      e.preventDefault();
      group.forEach(item=>{
         item.classList.remove("on");
      });
      e.currentTarget.classList.add("on");

      brandList.forEach(item =>{
         item.style.display="none";
      });
      
      let className = e.currentTarget.parentElement.getAttribute("class");
      console.log(className);

      switch(className){
         case 'all':
            showList(brandList)
            break;

         case 'beer':
            showList(beer)
            break;
      
         case 'soju':
            showList(soju)
            break;

         case 'wisky':
            showList(wisky)
            break;

         case 'wine':
            showList(wine)
            break;

         case 'abroad':
            showList(abroad)
            break;

         case 'sake':
            showList(sake)
            break;

         case 'etc':
            showList(etc)
            break;                            
      };
   });
}

function showList(list){
   list.forEach(item=>{
      item.style.display="block"
   });
};

