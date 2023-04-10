import { products } from './product.js'
const input_value = document.getElementById("search-input");
const ulList = document.getElementById("product-list");

function get_items() {
  ulList.innerHTML = "";
  const result = products.filter((ele) => {
    return ele.toLowerCase().startsWith(input_value.value || false);
  });
  for (let i of result) {
    addProductInTheList(i);
  }
}

function addProductInTheList(result) {
  const newList = document.createElement("li");
  const textInsideList = document.createElement("p");
  textInsideList.textContent = result;
  newList.appendChild(textInsideList);
  ulList.appendChild(newList);
}

input_value.addEventListener("input", get_items);
