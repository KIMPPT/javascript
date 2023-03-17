let explain=document.querySelector("#explain");
explain.addEventListener("click",change)
function change(e){
    let colors=e.target;
    console.dir(e.target);
    if(colors.style.color=="")
    colors.style.color="red";
    else colors.style.color="";
}
let explain2=document.querySelector("#explain2");
function change2(){
    let colors=explain2.children;
    console.dir(colors);
    colors[0].style.color="blue";
}
