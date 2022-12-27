let rootElement = document.getElementById("root");
let rootNew = document.getElementById("root");
rootNew.style.display = "flex";
rootNew.style.flexWrap = "wrap";
rootNew.style.width = "450px";

let = random = Math.floor(Math.random() * 255);
let = random1 = Math.floor(Math.random() * 255);
let = random2 = Math.floor(Math.random() * 255);
let = random3 = Math.floor(Math.random() * 16);
for (i = 0; i < 16; i++) {
  let newDiv = document.createElement("div");
  rootElement.appendChild(newDiv);
  newDiv.style.height = "110px";
  newDiv.style.width = "110px";
  newDiv.style.border = "1px solid black";
  newDiv.style.borderRadius = "10px";
  newDiv.style.backgroundColor = `rgb(${random},${random1},${random2})`;
  if (random3 == i) {
    newDiv.style.backgroundColor = `rgb(${random},${random1 - 30}, ${random2})`;
  }
}
