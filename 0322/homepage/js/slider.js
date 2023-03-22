/*슬라이더 버튼을 눌렸을 때 slider-item 위치 바뀜*/
let prevButton=document.querySelector("#prev-button");
let nextButton=document.querySelector("#next-button");

//슬라이더 아이템
let sliderItems=document.querySelectorAll(".slider-item");
//전체 슬라이더 갯수
let maxSlide=sliderItems.length;
//현재 슬라이더를 알려주기 위한 변수
let currSlide=1;
//버튼을 눌렸을 때 left 값 변경
nextButton.addEventListener("click",function()
{
    if(currSlide<maxSlide)
    {
        currSlide++; //2이면 -100%, 3이면 -200%, 4이면 -300%
        //sliderItems를 통해서 모든 left 값 이동
        for(let i=0;i<sliderItems.length;i++)
        {
            sliderItems[i].style.left=`${100+(-100)*currSlide}%`;
        }
    }
})
prevButton.addEventListener("click",function()
{
    if(currSlide>1)
    {
        currSlide--; //2이면 -100%, 3이면 -200%, 4이면 -300%
        //sliderItems를 통해서 모든 left 값 이동
        for(let i=0;i<sliderItems.length;i++)
        {
            sliderItems[i].style.left=`${100+(-100)*currSlide}%`;
        }
    }
})
