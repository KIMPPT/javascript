//사진(class=pic_을 클릭했을 때(이벤트) lightbox의 이미지가 클린한 이미지로 바뀜
//lightbox의 display가 표시되도록(block) 변경
//lightbox를 클릭했을 때 다시 display가 표시되지 않도록(none) 변경(이벤트)
let pic=document.querySelectorAll(".imagebox .box li .pic");
//먼저 사진 하나에 이벤트를 확인한 후 전체에 붙이기

    //pic[2].addEventListener("click",showpic);
let lightbox=document.querySelector("#lightbox"); //전역변수로 설정. pic으로 접근하기에는 부모로 올라가야하는게 너무 많아서 새롭게 lightbox로 접근
function showpic(e)
{
    //이미지 수정(이 문장이 없으면 첫번째 이미지만 나옴)
    //date-이름 작성한 갓은 dataset을 통해 접근. 밑의 작업을 통해 이미지 위치를 찾아낸다.
    let img=e.target.dataset.src;
    //여기에서 e.target은 함수를 받는 #lightbox(div)의 자식인 #image(img)를 뜻함
    console.dir(e.target); //여기서 img태그의 값을 관리자 모드를 통해 볼 수 있다. 그 중에서 img 태그 중 변경할 부분인 src 부분을 찾다보면 dataset이 보이고 하위로 내려보면 src가 나오게 된다.
    console.dir(img);
    //이미지 위치값을 가져와서 lightbox의 이미지에 추가
    lightbox.firstElementChild.src=img;
    //라이트 박스 모임
    lightbox.style.display="block";
}

//lgithbox를 클릭했을 때, 라이트 박스가 없어짐
lightbox.addEventListener("click",function(){
    lightbox.style.display="none";
});

for(let i=0;i<pic.length;i++)
{
    pic[i].addEventListener("click",showpic);
}
