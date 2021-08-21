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

<!-- 물 마시기 script -->
var wat1=document.querySelector(".empty1");
var wat2=document.querySelector(".empty2");
var wat3=document.querySelector(".empty3");

var watres=0;
var watrem=1500;
var wTres=document.querySelector('.waterres');

function reload() {
  wTres.innerHTML="지금까지 마신 물의 양 : "+watres+"mL"
    +"<br/>"+"남은 물의 양 :"+watrem+"mL"
    +"<br/>" + "조금만 더 힘내세요!" + "<br/>";
}


wat1.addEventListener("click", function() {
  watres += 500;
  watrem -= 500;
  wat1.src="./image/full.png";
  if(watres==1500) wTres.innerHTML="물을 다 마셨습니다!";
  else reload();
  
})

wat2.addEventListener("click", function() {
  watres += 500;
  watrem -= 500;
  wat2.src='./image/full.png';
  if(watres==1500) wTres.innerHTML="물을 다 마셨습니다!";
  else reload();
})

wat3.addEventListener("click", function() {
  watres += 500;
  watrem -= 500;
  wat3.src='./image/full.png';
  if(watres==1500) wTres.innerHTML="물을 다 마셨습니다!";
  else reload();
  
})


pre.addEventListener("click", function() {
  wat1.src="./image/emp.png";
  wat2.src="./image/emp.png";
  wat3.src="./image/emp.png";
  wTres.innerHTML='';
  watres=0;
  watrem=1500;
})


next.addEventListener("click", function() {
  wat1.src="./image/emp.png";
  wat2.src="./image/emp.png";
  wat3.src="./image/emp.png";
  wTres.innerHTML='';
  watres=0;
  watrem=1500;
})

