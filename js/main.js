// main.js
window.addEventListener("load" , ()=>{


// 주메뉴
// 각 li에 마우스를 올리면 (높이값 가져와서) 풀다운 메뉴 내려오고 보여야됨,
//키보드 탭으로 움직여야됨

const lis = document.querySelectorAll('.gnb>ul>li')
const header = document.querySelector(".header_wrap")
console.log(lis)

for(let i=0; i<lis.length; i++){
  lis[i].addEventListener('mouseover',e=>{
    e.currentTarget.classList.add('on');
    let ht = e.currentTarget.children[1].offsetHeight;
    header.style.height = `${70+ht}px`;
  })

  lis[i].addEventListener('mouseout', e=>{
    e.currentTarget.classList.remove('on');
    header.style.height = '70px'
  })

  lis[i].children[0].addEventListener('focus',e=>{
    e.currentTarget.parentElement.classList.add('on');
    var ht = e.currentTarget.nextElementSibling.offsetHeight;
    header.style.height = `${70+ht}px`
  })

  lis[i].children[0].addEventListener('blur', e=>{
    e.currentTarget.parentElement.classList.remove('on'); //선택한것의 부모요소에 class on을 지워라
    header.style.height = '70px'
  })
}



//검색버튼 누르면 검색박스 열리고 닫기버튼 누르면 닫히게 

const srchBtn = document.querySelector('.btn_srch')
const closeBtn = document.querySelector('.btn_srch_close')
const srchBox = document.querySelector('.srch_wrap')

srchBtn.addEventListener('click',e=>{
  e.preventDefault();
  srchBox.classList.add('on');
});

closeBtn.addEventListener('click' ,e=>{
  e.preventDefault();
  srchBox.classList.remove('on');
})




//오토배너

const slides = document.querySelectorAll('li.slide')
const rolls = document.querySelectorAll(".slide_roll li")
const nextBtn = document.querySelector("a.btn_next")
const prevBtn = document.querySelector("a.btn_prev")
const play = document.querySelector('.btn_play')
const playBtn = document.querySelector(".btn_play");


let bnnNum = 0;
let lastNum = document.querySelectorAll(".slide_wrap > li").length -1;

function activ(index, list){
  for(let el of list){
    el.classList.remove('on','active')
  }
  list[index].classList.add('on','active')
}


//next 눌렀을때 배너화면 다음껄로 넘어가고 아래 버튼도 다음껄로 활성화
nextBtn.addEventListener('click' ,e=>{
  e.preventDefault();
  bnnNum++
  if(bnnNum>lastNum) bnnNum = 0;
  activ(bnnNum,slides);
  activ(bnnNum,rolls);
  console.log(bnnNum);
})

//prev 눌렀을때

prevBtn.addEventListener('click' ,e=>{
  e.preventDefault();
  bnnNum--
  if(bnnNum<0) bnnNum = lastNum;
  activ(bnnNum,slides);
  activ(bnnNum,rolls);
  console.log(bnnNum);
})

//오토배너
function autoBanner(){
  bnnNum++
  if(bnnNum>lastNum) bnnNum = 0;
  activ(bnnNum,slides);
  activ(bnnNum,rolls);

  autoBnn = setTimeout(autoBanner,5000)//재귀함수
}
let autoBnn = setTimeout(autoBanner,5000)//최초함수 불러오기

//플레이버튼 눌렀을때 배너 멈추고 시작표시로 바뀜 , 배너 시작하고 정지표시로 바뀜 
let flag = 0;

playBtn.addEventListener('click', e =>{
  e.preventDefault();
  if(flag == 0){
    playBtn.classList.add('on');
    clearTimeout(autoBnn);
    flag = 1;
  }else{
    playBtn.classList.remove('on');
    autoBnn = setTimeout(autoBanner,5000);
    flag = 0
  }

});

// slide_roll중 하나를 누르면 그화면으로 바뀌고 버튼활성화 다른버튼 비활성화

const rollsBtn = document.querySelectorAll(".slide_roll>ul>li>a")

for(let i=0; i<rollsBtn.length; i++){
  rollsBtn[i].addEventListener('click',e=>{
    e.preventDefault();
  activ(i,slides);
  activ(i,rolls);
  clearTimeout(autoBnn);
  autoBnn = setTimeout(autoBanner, 5000);
  })
  // rollsBtn[i].addEventListener('mouseout',e=>{
  //   autoBnn = setTimeout(autoBanner, 5000);
  // })
}

const topBtn = document.querySelector('.btn_top')

// let scroll = document.querySelector('html').scrollTop;
//top버튼
//클릭하면 스크롤이 맨위로 올라감

topBtn.addEventListener('click', e => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})




window.addEventListener('scroll',()=>{
  let scroll = document.querySelector('html').scrollTop;
  console.log(scroll);
  if(scroll<=0){
    topBtn.classList.remove('on','ab');
  }else if(scroll > 4500){
    topBtn.classList.add('ab');
    topBtn.classList.add('on');
  }else{
    topBtn.classList.remove('ab');
    topBtn.classList.add('on');
  }
})
// 스크롤 내릴때 액션

const titleWrap = document.querySelector('.title_wrap')
const newsList = document.querySelector('.newsroom_list')
const newsEtc = document.querySelector('.newsroom_etc')
const partner = document.querySelector('.partner_portal')
const target = document.querySelectorAll('.list_area>.target');
console.log(target);

window.addEventListener('scroll',()=>{
  let scroll = document.querySelector('html').scrollTop;
  console.log(scroll);
  if(scroll > 500){
    titleWrap.classList.add("on");
  }
  if(scroll > 600){
    newsList.classList.add("on");
  }
  if(scroll > 700){
    newsEtc.classList.add("on");
  }
  if(scroll > 1300){
    partner.classList.add("on");
  }
  if(scroll > 2450){
   for(i=0; i<target.length;  i++){
    target[i].classList.add("on");
   }
   
  }

})


// // 스크롤 올릴때 주메뉴 나오기

var prevScrollTop = 0;
var nowScrollTop = 0;

function wheelDelta() {
  return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
};

window.addEventListener('scroll', function() {
  nowScrollTop = window.scrollY;
  if (wheelDelta() == 'down') {
    header.classList.remove("on");
  }
  if (wheelDelta() == 'up') {
    header.classList.add("on");
  }
  prevScrollTop = nowScrollTop;
});


})