//스크롤 이벤트 작성
//스크롤 할때마다 실행되는 함수도 함께 작성

//네비게이션 바
let nav=document.querySelector("#nav");
//섹션2 인트로
let intro=document.querySelector("#intro");
//섹션4 뉴스
let news=document.querySelector("#news");
/*스크롤 이벤트
스크롤의 Y[높이] 위치 : scrollY
스크롤 길이 : 
화면의 크기 : innerHeight
*/
window.addEventListener("scroll",function()
{
    //스크롤이 되면 scrollon 클래스 추가
    //200이상 스크롤이 되면 scrollon 클래스 추가
    if(window.scrollY>=200)
    {
        nav.classList.add("scrollon");
        intro.classList.add("scrollon");
    }
    //scrollY가 200 미만이면 secrollon 클래스 제거
    else nav.classList.remove("scrollon");
    if(this.scrollY>=1099)
    {
        news.classList.add("scrollon");
    }
})