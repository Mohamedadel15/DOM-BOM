let input =document.querySelector("input");
let div = document.querySelector(".text");
input.addEventListener("input",()=>{
    if(input.value>180){
        let value = `180deg`;
        div.style.transform=`rotate(${value})`;
        console.log(value);

    }else if(input.value<-180){
        let value = `-180deg`;
        div.style.transform=`rotate(${value})`;
        console.log(value);
    }else{
        let value = `${input.value}deg`;
        div.style.transform=`rotate(${value})`;
        console.log(value)
    }
})