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
}
