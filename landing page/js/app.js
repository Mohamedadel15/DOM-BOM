let ul=document.getElementById("navbar__list");
let main=document.getElementById("main")
let sections=document.querySelectorAll("section")

// to be scroll smothy 
let html=document.querySelector("html")
html.style.scrollBehavior="smooth"


// function to add section in navbar
function addList(){
    // the all child in the main tag
    let numberOFsection=main.childElementCount;
    for(let i=1;i<numberOFsection;i++){
        let class_section=main.children[i]
        let list = document.createElement("li")
        let links= document.createElement("a")
        links.textContent=`Section${i}`
        links.href=`#${class_section.id}`
        links.className="menu__link"
        links.id=`link${i}`
        links.setAttribute("data-link",`Section ${i}`)
        list.appendChild(links)
        ul.appendChild(list)
    };

};


//  this call back fun!!!
addList();

// function to concat  nav with section
window.addEventListener("scroll",function(){
    let scrolPossition=this.window.scrollY
    sections.forEach((section)=>{
        if(scrolPossition>=section.offsetTop-200&&scrolPossition<section.offsetTop+section.offsetHeight+200){
           let sectionId= section.attributes.id.value;
            removeNavClass();
            addNavClass(sectionId);   
            removeAllActiveClasses();
            addActiveClass(sectionId);
        }
    })
})




let addActiveClass = function(sectionId){
    document.getElementById(`${sectionId}`).classList.add("your-active-class")
}
let removeAllActiveClasses = function(){
    sections.forEach((section)=>{
        section.classList.remove("your-active-class");
    })
}
let removeNavClass=function(){
    document.querySelectorAll("nav ul li a").forEach((el) => {
        el.id=""
    
    });

}
let addNavClass=function(sectionId){
    let selector = `nav a[href="#${sectionId}"]`;
    document.querySelector(selector).id=`link1`;
}



