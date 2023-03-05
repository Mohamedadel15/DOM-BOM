let password = document.querySelector(".pass");
let submit = document.querySelector(".id");
submit.addEventListener("click", () => {
  if (submit.value === "show") {
    submit.value = "hide";
    password.type = "text";
  } else {
    submit.value = "show";
    password.type = "password";
  }
});
