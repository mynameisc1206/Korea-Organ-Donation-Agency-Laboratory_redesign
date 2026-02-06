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


let rows = document.querySelectorAll('.notice-text-wrap');
let rowPerPage = 13;
let rowCount = rows.length;
let pageCount = Math.ceil(rowCount/rowPerPage);
let pageNumbers = document.querySelector('.page-number');
let PagePrevBtn = document.querySelector('.page-prev-btn');
let PageNextBtn = document.querySelector('.page-next-btn');
let pageActiveIndex = 0;
let currentPageNum = 0;
let MaxPageNum = 5;

//페이지번호 생성
for(let i = 1; i <= pageCount; i++){
  pageNumbers.innerHTML += `<li>${i}</li>`
}
let pageNumberBtn = pageNumbers.querySelectorAll('li'); //생성된 페이지 번호 가져오기

//각 페이지 번호 클릭시 처리하는 함수
pageNumberBtn.forEach((item, idx) => {
  item.addEventListener('click', () => {
    displayRow(idx)
  })
})
//현재 페이지의 행을 보여주는 함수
function displayRow(idx){
  let start = idx * rowPerPage;
  let end = start + rowPerPage;
  let rowsArray = [...rows];

  for(ra of rowsArray){
    ra.style.display = 'none'
  }
  let newRows = rowsArray.slice(start, end);
  //console.log(newRows)
  for(nr of newRows){
    nr.style.display = ''
  }
  for(pb of pageNumberBtn){
    pb.classList.remove('active')
  }
  pageNumberBtn[idx].classList.add('active')
}
displayRow(0)

// 페이지 그룹(숫자) 를 보여주는 함수
function displayPage(num){
  for(pb of pageNumberBtn){
    pb.style.display = 'none'
  }
  
  let totalPageCount = Math.ceil(pageCount/MaxPageNum);
  let pagenumArr = [...pageNumberBtn];
  let start = num * MaxPageNum;
  let end = start + MaxPageNum;
  let pageListArr = pagenumArr.slice(start, end);

  for(let item of pageListArr){
    item.style.display = 'block'
  }
  
  //이전버튼
  if(pageActiveIndex === 0){
    PagePrevBtn.style.display = 'none'
  }else{
    PagePrevBtn.style.display = 'flex'
  }
  //다음버튼
  if(pageActiveIndex === totalPageCount -1){
    PageNextBtn.style.display = 'none'
  }else{
    PageNextBtn.style.display = 'flex'
  }
}
displayPage(0)

//페이지 버튼 클릭시(prev,next)
PagePrevBtn.addEventListener('click', () => {
  let pagePrevNum = pageActiveIndex * MaxPageNum - MaxPageNum;
  //console.log(pagePrevNum)
  displayRow(pagePrevNum);
  --pageActiveIndex;
  displayPage(pageActiveIndex)
})
PageNextBtn.addEventListener('click', () => {
  let pageNextNum = pageActiveIndex * MaxPageNum + MaxPageNum;
  displayRow(pageNextNum);
  ++pageActiveIndex;
  displayPage(pageActiveIndex)
})

//페이지 네이션