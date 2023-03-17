//a태그를 클릭하면 class추가. class이름은 on, li태그에 추가. 다른 li태그들은 class 이름 제거
let btnList=document.querySelectorAll(".list .btn"); //div 안의 ul(.list) 안의 li 안의 a(.btn)태그로 접근
//버튼 중 하나를 선택해서 이벤트 추가
for(let i=0;i<btnList.length;i++)
{
    btnList[i].addEventListener("click",onTab);
}
// btnList[1].addEventListener("click",onTab); 가 정상작동했다면 for 문을 이용해 모든 버튼에 이벤트로 적용시킴
function onTab(event)
{
    //a태그를 사용 할 때, 새로고침 이벤트가 기본으로 있으므로 새로고침을 제거하고 사용
    event.preventDefault();
    //어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정하는 함수
    //li에 있는 class 이름 중 on을 제거하기 위한 btnList를 사용
    for(let i=0;i<btnList.length;i++)
    {
        btnList[i].parentNode.classList.remove("on");
    }
    //해당 버튼의 인덱스 에만 on 클래스 추가
    event.target.parentNode.classList.add("on");
}