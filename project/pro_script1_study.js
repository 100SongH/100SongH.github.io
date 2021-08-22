<!-- 날짜 -->
var d=new Date();
var year=d.getFullYear();
var month=d.getMonth();
var day=d.getDate();
var date=document.querySelector("h1");
date.innerHTML+=(year+"년 "+(month+1)+"월 "+day+"일 ");


<!-- N일차 -->
var a=1;
var N=document.querySelector('h2');
N.innerHTML+= (a+"일차");


<!-- 이미지 업로드 -->

var submit = document.getElementById('submitButton');
submit.onclick = showImage;

function showImage() {
  var newImage = document.getElementById('image-show').lastElementChild;
  newImage.style.visibility = "visible";

};

function loadFile(input) {
  var file = input.files[0];

  var name = document.getElementById('fileName');
  name.textContent = file.name;

  var newImage = document.createElement("img");
  newImage.setAttribute("class", 'img');

  newImage.src = URL.createObjectURL(file);   

  newImage.style.width = "350px";
  newImage.style.visibility = "hidden";
  newImage.style.objectFit = "contain";

  var container = document.getElementById('image-show');
  container.appendChild(newImage);
  
  suc++;
};


<!-- 완료 현황 -->
var suc=0;
var per=document.querySelector('h3');
per.innerHTML +=("완료 현황 : " + ((suc*100/a)+"%"));


<!-- prev, next버튼 기능구현 -->
var pre =document.getElementById('pre');
var next =document.getElementById('next');

pre.addEventListener("click", function() {
  if (a==1) {
    alert("이전 페이지가 존재하지 않습니다.");
  }
  
  else {
    a--;
    
    if(day==1) {
    
      if(month==0) {
        day=31;
        month=11;
        year=year-1;
      }
      
      else {
        day=32-new Date(year, (month-1), 32).getDate();
        month=month-1;
      }
    }
    
    else day--;
  }
  
  date.innerHTML=(year+"년 "+(month+1)+"월 "+day+"일 ");
  N.innerHTML= (a+"일차");
  per.innerHTML =("완료 현황 : " + ((suc*100/a)+"%"));


  
  document.getElementById('fileName').textContent = null;
  document.createElement("img").removeAttribute('class');
  document.getElementById('image-show').lastElementChild.style.visibility = "hidden";
  document.createElement("img").src='null';
  
})


next.addEventListener("click", function() {
  a++;
  
  if(day==32-new Date(year, month, 32).getDate()) {
    if(month==11) {
      year++;
      month=0;
      day=1;
    }
    
    else {
      month++;
      day=1;
    }
  }
  else day++;
  
  
  date.innerHTML=(year+"년 "+(month+1)+"월 "+day+"일 ");
  N.innerHTML= (a+"일차");
  per.innerHTML =("완료 현황 : " + ((suc*100/a)+"%"));


  document.getElementById('fileName').textContent = null;
  document.createElement("img").removeAttribute('class');
  document.getElementById('image-show').lastElementChild.style.visibility = "hidden";
  document.createElement("img").src='null';

  
})

<!-- 공부하기 script -->

var sT=0
var sTalert = document.getElementById("totalst");
var plusA=document.querySelector(".aa");
var minusB = document.querySelector(".bb");



plusA.addEventListener("click", function() {
  sT=sT+30;
  sTalert.innerHTML ="총 공부시간 : "+sT+"분";
})
minusB.addEventListener("click", function() {
  if(sT<=0) sT=0;
  else  sT=sT-30;
  sTalert.innerHTML ="총 공부시간 : "+sT+"분";
})


pre.addEventListener("click", function() {
  sT=0;
  sTalert.innerHTML ="총 공부시간 : "+sT+"분";
})

next.addEventListener("click", function() {
  sT=0;
  sTalert.innerHTML ="총 공부시간 : "+sT+"분";
})

