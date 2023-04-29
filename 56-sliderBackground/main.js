// store the current color
let colorName = localStorage.getItem("colorName");

//  polit color to change  text background color
const colorPolit = document.querySelectorAll(".polits div");

// background text color
const textBackgroundColor = document.querySelector(".text");

// all background images

const allImages =["pexels-1","pexels-2","pexels-3","pexels-4","pexels-5"]

// button to show and hide text
const textButton = document.querySelector(".slider-left")


// to save the color in local storage
colorPolit.forEach((element) => {
  if (element.getAttribute("data-color") == colorName) {
    textBackgroundColor.style.backgroundColor = colorName;
    colorPolit.forEach((element) => element.classList.remove("active"));
    element.classList.add("active");
  }
});

// make the background image stored in the local storage
document.querySelector(".main-container").style.background=localStorage.getItem("randomNumber");

// to add color to text background
colorPolit.forEach((element) => {
  element.addEventListener("click", ({ target }) => {
    colorPolit.forEach((element) => element.classList.remove("active"));
    const colorName = target.getAttribute("data-color");
    textBackgroundColor.style.backgroundColor = `${colorName}`;
    target.classList.add("active");
    localStorage.setItem("colorName", colorName);
  });
});

// to create anew number random 
setInterval(randomImage,10000)

function randomImage(){
    localStorage.setItem("randomNumber",`url(../images/${allImages[Math.floor(Math.random()*allImages.length)]}.jpg)`)
    document.querySelector(".main-container").style.background=`url(../images/${allImages[Math.floor(Math.random()*allImages.length)]}.jpg)`
}

textButton.addEventListener("click", showAndHide)

function showAndHide(){
    textBackgroundColor.classList.toggle("show")
}




