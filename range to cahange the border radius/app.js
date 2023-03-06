let div =document.querySelector("div");
let input = document.querySelector("input");
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let value =0;


input.addEventListener("input",()=>{
    div.style.borderRadius=`${input.value}%`
})

console.log(btn1)
btn2.addEventListener("click",()=>{
    let num = input.value;
    sum = +num +1;
    input.value=sum;
    div.style.borderRadius=`${input.value}%`
   console.log(+num,sum);

})
btn1.addEventListener("click",()=>{
    let num = input.value;
    sum = +num -1;
    input.value=sum;
    div.style.borderRadius=`${input.value}%`
   console.log(+num,sum);

})
let remove =()=>{
    console.log(54654)
}
if(window.loa){
    

}
