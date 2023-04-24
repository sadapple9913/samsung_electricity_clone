// sub1.js
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




const step1Btn = document.querySelectorAll(".step1>ul>li>a");

step1Btn.forEach((el,i) =>{
  el.addEventListener("click", e=>{
    e.preventDefault();
    for(let i=0;i<step1Btn.length;i++){
      imgChange(step1Btn[i],`url(images/ico_inquiry_0${i+1}.png)`,`transparent`,`#333`);
    }
    imgChange(el,`url(images/ico_inquiry_on_0${i+1}.png)`,`#043285`,`#fff`);
  });
});
function imgChange(obj,img,color,textColor){
  obj.style.backgroundColor = color;
  obj.style.backgroundImage = img;
  obj.style.color = textColor;
}

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
  }else if(scroll > 500){
    topBtn.classList.add('ab');
    topBtn.classList.add('on');
  }else{
    topBtn.classList.remove('ab');
    topBtn.classList.add('on');
  }
})

});