let menuItem = document.querySelectorAll('.menu-itme');
let subMenus = document.querySelectorAll('.submenu')
console.log(menuItem);
console.log(subMenus);

// 마우스가 메인 네비에 호버시 서브메뉴 등장
menuItem.forEach(function(item){
  item.addEventListener('mouseenter', function(){
    console.log('마우스 들어옴')
    subMenus.forEach(sub => sub.classList.remove('active'));
    let targetId = this.dataset.target;
    console.log(targetId)
    let targetsubMenu = document.getElementById(targetId);
    if(targetsubMenu){
      console.log('서브메뉴 등장')
      targetsubMenu.classList.add('active')
    }
  })
})
// document.querySelector('.main-nav').addEventListener('mouseleave', function(){
//   subMenus.forEach(sub => sub.classList.remove('active'));
//   console.log('서브메뉴 삭제')
//   })
// 마우스가 메인 네비에서 나갈 시 서브메뉴 삭제
subMenus.forEach(menu => {
  menu.addEventListener('mouseenter', function(){
    this.classList.add('active');
    console.log(this,'서브메뉴 도착')
  })
  // 마우스가 서브메뉴에 호버시 유지
  menu.addEventListener('mouseleave', function(){
    this.classList.remove('active');
    console.log(this,'서브메뉴 아웃')
  })
  // 마우스가 서브메뉴 나갈 시 삭제
})

let siteMapToggle = document.getElementById('siteMapToggle');
let siteMap = document.getElementById('siteMap');
console.log(siteMapToggle);
console.log(siteMap);

siteMapToggle.addEventListener('click', function(){
  siteMapToggle.classList.toggle('active')
  siteMap.classList.toggle('active')
})
// 네비게이션 메뉴

let quickMenu = document.querySelector('.quickmenu');

window.addEventListener('scroll', () => {
  // 현재 스크롤 위치
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop >= 200) {
    // 200px 이상 내려오면 클래스 추가
    quickMenu.classList.add('scrolled');
  } else {
    // 200px 미만이면 클래스 제거
    quickMenu.classList.remove('scrolled');
  }
});
//스크롤 애니메이션

let tabButtons = document.querySelectorAll('.tab');

tabButtons.forEach(button => {
  button.addEventListener('click', function(){
    let target = this.getAttribute('data-tab');

    tabButtons.forEach(btn => 
      btn.classList.remove('active'));
      this.classList.add('active');
      document.querySelectorAll('.swiper').forEach(s => s.classList.remove('active'))

      document.getElementById(target).classList.add('active')
  })
})

  var swiper = new Swiper("#swiper01", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 30000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  var swiper = new Swiper("#swiper02", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 30000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
// 스와이퍼 탭 메뉴

// 협력기관 탭버튼

// 1. 탭 메뉴 로직
let boradTab = document.querySelectorAll('.borad-tab');
let noticeInfo = document.querySelectorAll('.notice-info');

boradTab.forEach(function(boradbtn) {
  boradbtn.addEventListener('click', function() {
    boradTab.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    let targetId = boradbtn.getAttribute('data-btn');
    noticeInfo.forEach(n => {
      if (n.id === targetId) {
        n.classList.add('active');
      } else {
        n.classList.remove('active');
      }
    });
  });
});

document.addEventListener('mouseover', (e) => {
  let targetBox = e.target.closest('.info-text-box');
  
  if (targetBox) {
    let hoverContent = targetBox.querySelector('.info-content');
    targetBox.classList.add('on');
    if (hoverContent) hoverContent.classList.add('on');
  }
});

document.addEventListener('mouseout', (e) => {
  let targetBox = e.target.closest('.info-text-box');
  
  if (targetBox) {
    let hoverContent = targetBox.querySelector('.info-content');
    targetBox.classList.remove('on');
    if (hoverContent) hoverContent.classList.remove('on');
  }
});

var Noticeswiper = new Swiper(".swiperaside", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

// 공지사항 탭버튼

let newsBtn = document.querySelectorAll('.news-btn');
let newsText = document.querySelectorAll('.em-news-texts');
console.log(newsBtn);
console.log(newsText);

newsBtn.forEach(function(nbtn){
  nbtn.addEventListener('click', function(){
    newsBtn.forEach(function(e){
      e.classList.remove('active')
      console.log('삭제')
    });
    this.classList.add('active')
    console.log('입력');

    newsText.forEach(function(t){
      t.classList.remove('active')
      console.log('삭제')
    });
     
    let Assignid = nbtn.getAttribute('data-news');
    console.log(Assignid)
    newsText.forEach(function(t){
      if(t.id === Assignid){
        t.classList.add('active')
      }else{
        t.classList.remove('active')
      }
    })
  });
})

// 채용입찰 탭버튼