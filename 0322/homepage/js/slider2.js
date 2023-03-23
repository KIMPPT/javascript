/*슬라이더 버튼을 눌렸을 때 각 위치의 슬라이더 출력*/
let slider2Buttons=document.querySelectorAll("#slider2-buttons");
//슬라이더 아이템
let slider2Items=document.querySelectorAll("#slider2");
//각각의 버튼을 눌렸을 때 그 위치에 있는 슬라이더로 이동
//각각의 버튼 : slider2Buttons[0]~slider2Button2[2]
//각각의 아이템 : slider2Items[0]~slider2Items[2]
//화면이 보이는 위치 : left = 0 ,left=-100%, left=-200%
//규칙 : 버튼[0]를 누르면 left=0이동 / 버튼[1]을 누르면 left=-100% / 버튼[2]를 누르면 left=-200%
// >>버튼[i]를 누르면 left=i*(-100)

//버튼[1] 가져와서 확인 후 아래내용 반복해서 사용
slider2Buttons[1].addEventListener("click",function(e){
    e.preventDefault();
    //버튼의 인덱스가 1일 때, 위치를 -100%
    //slider2Items의 내용
    for(let i=0;i<slider2Items.length;i++)
    {
        slider2Items[i].style.left=`-100%`;
    }
})
//버튼 배열에 이벤트 리스너 추가
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

//버튼을 눌렸을 때 left 값 변경

nextButton.addEventListener("click",function()
{
    if(currSlide<maxSlide)
    {
        currSlide++; //2이면 -100%, 3이면 -200%, 4이면 -300%
        //sliderItems를 통해서 모든 left 값 이동
        for(let i=0;i<slider2Items.length;i++)
        {
            slider2Items[i].style.left=`${100+(-100)*currSlide}%`;
        }
    }
})
prevButton.addEventListener("click",function()
{
    if(currSlide>1)
    {
        currSlide--; //2이면 -100%, 3이면 -200%, 4이면 -300%
        //sliderItems를 통해서 모든 left 값 이동
        for(let i=0;i<slider2Items.length;i++)
        {
            slider2Items[i].style.left=`${100+(-100)*currSlide}%`;
        }
    }
})
