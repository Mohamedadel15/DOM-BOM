let el=document.getElementById("sreoll");
let hight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
addEventListener("scroll",function(){
    let scroled=this.document.documentElement.scrollTop
    el.style.width=`${scroled/hight*100}%`
})
let x=hight;
console.log(`the new result = ${(x/document.documentElement.scrollTop).toFixed(0)}% `)
