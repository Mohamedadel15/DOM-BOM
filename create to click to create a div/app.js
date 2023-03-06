let btn = document.querySelector("button");
let parentDiv = document.querySelector(".container");
let swwitch = document.querySelector("#switch");

btn.addEventListener("click", () => {
  if (parentDiv.childElementCount < 64) {
    if (btn.innerHTML === "create") {
      let childDiv = document.createElement("div");
      childDiv.className = "child";
      parentDiv.append(childDiv);
      console.log(parentDiv.childElementCount);
    } else {
      let newCHILDparent = parentDiv.children[0];
      if (parentDiv.children.length > 0) {
        newCHILDparent.remove();
        console.log(parentDiv.childElementCount);
      } else {
        btn.innerHTML = "create";
        swwitch.className = "even";
      }
    }
  }
});

swwitch.addEventListener("click", () => {
  if (swwitch.className === "even") {
    btn.innerHTML = "Delete";
    swwitch.className = "";
  } else {
    btn.innerHTML = "create";
    swwitch.className = "even";
  }
});
