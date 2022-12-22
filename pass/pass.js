let password = "11";
let button = document.querySelector("button");
let input = document.querySelector("input");
let output = "false";
button.addEventListener("click", () => {
  if (input.value == password) {
    output = true;
  }
});
