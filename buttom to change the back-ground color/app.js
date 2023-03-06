// this is the hard way 
// let btn = document.querySelectorAll("button");
// btn[0].addEventListener("click",()=>{
//     document.body.style.backgroundColor="red";
// })
// btn[1].addEventListener("click",()=>{
//     document.body.style.backgroundColor="green";
// })
// btn[2].addEventListener("click",()=>{
//     document.body.style.backgroundColor="blue";
// })

// this the easy way!!!
let add =(color)=>{
    document.body.style.backgroundColor=color;
}

//  this way to change the background color dynamically 

let btnLive = document.querySelector("#liveColor")
let divColor = document.querySelector(".live")


let show = ()=>{
    divColor.style.backgroundColor=btnLive.value;

}
  
  