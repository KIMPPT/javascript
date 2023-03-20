//body의 이미지가 새로고침 할때마다 변경
//이미지가 새로고침 할때마다 변경 = body를 새로 부를때마다 바뀜-새로고침할때마다 js호출
//이미지 여러개, 랜덤으로 변경(Math.random(),정수값을 사요하기 위해 원하는 횟수 곱합, 소수 부분은 버림)
//랜덤한 문자열을 사용하기 위해 배열과 함께 사용
let images=["0.jpg","1.jpg","2.jpg"];
let randomindex=Math.floor(Math.random()*images.length);
//랜덤 뒤에 곱하는 수를 고정하면 이미지가 늘어나거나 줄어 들 때 수동으로 조절해야 하기 때문에 배열의 길이를 넣으면 자동으로 조절이 됨
let body=document.querySelector("body");
body.style.backgroundImage=`url(/0320/todolist/image/${images[randomindex]})`;
//이미지를 위 image배열의 randomindex(정수)로 받아와 출력하게 만듬
body.style.backgroundSize="cover";
