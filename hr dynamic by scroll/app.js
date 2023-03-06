let hr = document.querySelectorAll("hr");
window.addEventListener("scroll",()=>{
    let location=(window.scrollY / window.innerHeight)*13+20
    console.log(location)
    if(location <=25){
        hr[0].style.width=`0px`;
        console.log(`hr 1 = ${hr[0]}`)
    }else{
        hr.forEach((el)=>{
      
            el.style.width=location+"%";
        
    })
    }
    
  
})