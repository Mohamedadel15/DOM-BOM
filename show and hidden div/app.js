let div = document.querySelector(".container div")
let btn = document.querySelector("button")
console.log(div)
div.style.display="none";
btn.addEventListener("click",()=>{
    if(btn.className==="mohamed"){
        btn.innerHTML="Hide";
        div.style.display="block";
        btn.classList.remove("mohamed");
    }else{
        btn.innerHTML="Show";
        div.style.display="none";
        btn.classList.add("mohamed");

    }
})
