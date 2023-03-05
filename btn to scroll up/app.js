let btn=document.querySelector("button");
window.addEventListener("scroll",()=>{
    console.log(window.scrollY)
    console.log(`the main hight equall ${window.innerHeight}`)
    if(window.scrollY>window.innerHeight){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    }
})
btn.addEventListener("click",()=>{
    window.scrollTo(0,0);
})