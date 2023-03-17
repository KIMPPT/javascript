//a태그를 클릭하면 class추가. class이름은 on, li태그에 추가. 다른 li태그들은 class 이름 제거
let btnList=document.querySelectorAll(".list .btn"); //div 안의 ul 안의 li 안의 a태그로 접근
//버튼 중 하나를 선택해서 이벤트 추가
//for 문을 통해 인덱스 번호가 n번인 리스트 누르면 동작
for(let i=0;i<btnList.length;i++)
{
    btnList[i].addEventListener("click",onTab);
}
// btnList[1].addEventListener("click",onTab);
function onTab(event)
{
    //a태그를 사용 할 때, 새로고침 이벤트가 기본으로 있으므로 새로고침을 제거하고 사용
    event.preventDefault();
    //li에 있는 on을 제거하기 위한 btnList를 사용
    for(let i=0;i<btnList.length;i++)
    {
        btnList[i].parentNode.classList.remove("on");
    }
    //on클래스 추가
    event.target.parentNode.classList.add("on");
}