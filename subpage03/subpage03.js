let menuItem = document.querySelectorAll('.menu-itme');
let subMenus = document.querySelectorAll('.submenu')
//console.log(menuItem);
//console.log(subMenus);

// 마우스가 메인 네비에 호버시 서브메뉴 등장
menuItem.forEach(function(item){
  item.addEventListener('mouseenter', function(){
    //console.log('마우스 들어옴')
    subMenus.forEach(sub => sub.classList.remove('active'));
    let targetId = this.dataset.target;
    //console.log(targetId)
    let targetsubMenu = document.getElementById(targetId);
    if(targetsubMenu){
      //console.log('서브메뉴 등장')
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
    //console.log(this,'서브메뉴 도착')
  })
  // 마우스가 서브메뉴에 호버시 유지
  menu.addEventListener('mouseleave', function(){
    this.classList.remove('active');
    //console.log(this,'서브메뉴 아웃')
  })
  // 마우스가 서브메뉴 나갈 시 삭제
})

let siteMapToggle = document.getElementById('siteMapToggle');
let siteMap = document.getElementById('siteMap');
//console.log(siteMapToggle);
//console.log(siteMap);
siteMapToggle.addEventListener('click', function(){
  siteMap.classList.toggle('active')
})
// 네비게이션 메뉴

let siteLinkToggle = document.querySelector('.link-select');
let siteLink = document.querySelector('.sitelink-click');
//console.log(siteLinkToggle);
//console.log(siteLink);
siteLinkToggle.addEventListener('click', function(){
  siteLink.classList.toggle('active')
})
// 사이트 제공 링크
