/*슬라이더 버튼을 눌렸을 때 각 위치의 슬라이더 출력*/
let slider2Buttons=document.querySelectorAll("#slider2-buttons a");
//여기에서 계속해서 오류를 잡지 못한 이유는 slider2-buttons id까지 접근은 했는데 그 안에서
//a태그들을 싹 모아서 배열로 만들어야 했는데 a를 빼서 그 구간을 못잡았다
//슬라이더 아이템
let slider2Items=document.querySelectorAll(".slider2-item");
//여긴 class명이 단독으로 있고, 그 class이름을 달고 있는 것들이 여러개 있어서 잡아진다.
//각각의 버튼을 눌렸을 때 그 위치에 있는 슬라이더로 이동
//각각의 버튼 : slider2Buttons[0]~slider2Button2[2]
//각각의 아이템 : slider2Items[0]~slider2Items[2]
//화면이 보이는 위치 : left = 0 ,left=-100%, left=-200%
//규칙 : 버튼[0]를 누르면 left=0이동 / 버튼[1]을 누르면 left=-100% / 버튼[2]를 누르면 left=-200%
// >>버튼[i]를 누르면 left=i*(-100)

//버튼[1] 가져와서 확인 후 아래내용 반복해서 사용

/* 내용확인을 했으므로 주석처리
slider2Buttons[1].addEventListener("click",function(e){
    e.preventDefault();
    //버튼의 인덱스가 1일 때, 위치를 -100%
    //slider2Items의 내용
    for(let i=0;i<slider2Items.length;i++)
    {
        slider2Items[i].style.left=`-100%`;
    }
})
*/
//버튼에 이벤트 리스너 추가
for(let i=0;i<slider2Buttons.length;i++)
{
    slider2Buttons[i].addEventListener("click",function(e)
    {
        e.preventDefault();
        //forEach는 배열에 있는 각각의 값을 꺼내서 
        //콜백함수를 통해 쓸 수 있다.
        //배열.forEach(function(배열의 값,인덱스){});
        slider2Items.forEach(function(item,index){
            item.style.left=`${i*(-100)}%`;
        });
    })
}

//슬라이더 내부에 slider2-dots을 만들어서 버튼 작성
//형태 : div class=slider2-dots : dot을 묶는 태그
//div class=dot : 각 슬라이더로 이동하는 dot
//어떻게 추가 : slider2Items의 갯수에 따라서 생성 및 추가
//어느 위치에 추가해야하는가 : slider2 하단에 추가
let dots=document.createElement("div");
dots.classList.add("slider2-dots");
for(let i=0;i<slider2Items.length;i++)
{
    let dot=document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    //dots.children[0].classList.add("on"); 맨 처음 동그라미 미리 색칠해두고 싶다면 추가
    //dot에 이벤트 리스너 추가
    dot.addEventListener("click",function(e){
        //버튼을 클릭했을 때 슬라이더의 left 값이 수정
        slider2Items.forEach(function(item)
        {
            item.style.left=`${i*(-100)}%`;
        }
        );
        //모든 dot의 on class를 을 지우고 현재 클릭한 dot만 on class 추가
        //모든 dot? dots의 자식을 통해 찾을 수 있다.
        // >>dots의 자식들을 반복해서 remove()

        for(let i=0;i<dots.children.length;i++)
        {
            dots.children[i].classList.remove("on");
        }
        //현재 dot은 무엇? 이벤트 객체
        //e.target.classList.add()
        e.target.classList.add("on");
    }
    )
}
let slider2=document.querySelector("#slider2"); //id이름이 slider2인 태그 들고옴(class 이름도 같아서 .을 써도 무관)
slider2.appendChild(dots); //id가 slider2인 태그 자식(하위)로 dots를 붙임