let strBtn = document.querySelector(".starBtn");
let endBtn = document.querySelector(".endBtn");
let strDiv = document.querySelector(".start");
let endDiv = document.querySelector(".end");
strBtn.addEventListener("click",()=>{
    console.log("hello")
    console.log(strDiv)
    console.log(endDiv)
    strDiv.classList.add("active");
    endDiv.classList.remove("active");
})
endBtn.addEventListener("click",()=>{
    strDiv.classList.remove("active");
    endDiv.classList.add("active");
})