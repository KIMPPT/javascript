//버튼을 눌렸을 때 환영인사 출력
//form의 submit를 눌렸을 때 input의 값이 h1 태그에 할당

//id를 통해 직접 접근
//submit을 눌렸을 때(이벤트)-form에 이벤트
//input 값이 h1 태그에 할당(실행할 함수)
let loginform = document.querySelector("#loginform");
loginform.addEventListener("submit", onlogin);
//로그인 시 발생할 함수
function onlogin(event) {
  //submit 이벤트는 새로고침 이벤트가 들어가있다.
  event.preventDefault();
  //값을 들고올 input 태그 가져옴-value
  let loginid = document.querySelector("#loginid");
  //값을 넣어줄 h1 태그 가져옴-innerHTML
  let greeting = document.querySelector("#greeting");
  greeting.innerHTML = `환영합니다. ${loginid.value}님`;
  //화면에 글자를 보여주기 위해 클래스 제거 
  greeting.classList.remove("hidden");
  //로그인 창을 보이지 않기 위한 class 추가
  loginform.classList.add("hidden");
  //위 2개는 css 에서 class이름이 hidden인 경우 style:none을 적용한 것을 이용해 활용했음
}
