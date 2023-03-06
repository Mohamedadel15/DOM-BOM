let input = document.querySelectorAll("input");
let h2 = document.querySelectorAll("h2");
let h1 = document.querySelector("h1");
//  its vert important to declerate this to make the input constant after load the page !!!!!!!
h2[0].innerHTML=localStorage.getItem("value");
// this function when it run it will make all element from zero !!!!
let add = ()=>{
    console.log(input[1].value)
    localStorage.setItem("value",input[0].value);
    console.log(localStorage.getItem("value"))
    h2[0].innerHTML=localStorage.getItem("value");
};
let add1=()=>{
    h2[1].innerHTML=input[1].value;

};

