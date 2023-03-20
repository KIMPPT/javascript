//todo리스트 만들기
//추가 : 할 일 값을 받아와서 ul의 li로 출력하기
//할일 완료 : 체크를 했을 때, 완료 포시
//하지 않을 때 그 할 일을 삭제

//할일 입력창에 값을 입력하고 sumbit을 했을 때 작성한 할 일을 ul에 li로 추가
let todoform = document.querySelector("#memoform");
todoform.addEventListener("submit", todoadd);
//todo를 추가하는 함수
function todoadd(e) {
  e.preventDefault();
  //input태그의 값을 가져와서 ul의 li로 추가하기
  //todoform.firstelementchild는 input type:text를 들고옴
  let todovalue = todoform.firstElementChild.value;
  //li 태그 생성 & ul 태그를 찾아서 추가
  let li = document.createElement("li");
  //li 태그에 체크박스 추가
  let check = document.createElement("input");
  check.type = "checkbox";
  //li 태그에 텍스트노드 추가
  let text = document.createTextNode(todovalue);
  //li 태그에 x 버튼 추가
  let but = document.createElement("button");
  but.innerHTML = "X";
  //li 태그 안에 위 3개를 추가
  li.appendChild(check);
  li.appendChild(text);
  li.appendChild(but);
  //  document.querySelector("#todolist")=ul
  document.querySelector("#todolist").appendChild(li);
  //input의 value값을 "" 으로 바꿈
    todoform.firstElementChild.value="";
}
