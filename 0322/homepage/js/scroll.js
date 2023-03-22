//스크롤 이벤트 작성
//스크롤 할때마다 실행되는 함수도 함께 작성

//네비게이션 바
let nav=document.querySelector("#nav");

window.addEventListener("scroll",function()
{
    nav.classList.add("scrollon");
    //스크롤이 되면 scrollon 클래스 추가
})