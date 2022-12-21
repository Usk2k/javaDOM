// document.getElementById("root").innerHTML.text = "Hello world";
// document.getElementsByClassName("dummy")[0].innerText = "test";
// document.getElementsByTagName("body");
// document.getElementById("demo").innerHTML;
// document.getElementsByTagName("root")[0].innerHTML =
//   "<div class = 'darkmode' syle='color:aqua;'><h1>Hello</h1><p>dark</p>";
// document.getElementsByClassName("profileName")[0].style.backgroundColor =
//   "blue";
// document.getElementsByClassName("profileName")[0].style.color = "red";
// const newDiv = document.createElement("h1");
// const newContent = document.createTextNode("hello");
// newDiv.appendChild(newContent);
// const main = document.getElementsByTagName("main");
// main[0].appendChild(newDiv);
// // ============zurag=========//
// document.getElementById("image").src = "wallpaper.webp";
// //============= ul/li=========//
// let rootElement = document.getElementById("root");
// let ulElement = document.createElement("ul");
// rootElement.appendChild(ulElement);
// for (let i = 0; i < 10; i++) {
//   let liElement = document.createElement("li");
//   liElement.innerText = i.toString();
//   ulElement.appendChild(liElement);
// }
// ============= *********shatar ****==================//
// let rootElement = document.getElementById("root");
// rootElement.style.display = "flex";
// rootElement.style.flexWrap = "wrap";
// rootElement.style.width = "850px";
// for (let i = 0; i < 8; i++) {
//   for (let j = 0; j < 8; j++) {
//     let newDiv = document.createElement("div");
//     rootElement.appendChild(newDiv);
//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     newDiv.style.border = "1px  solid black";
//     if ((i + j) % 2 == 0) {
//       newDiv.style.backgroundColor = "green";
//     }
//   }
// }

// let name = "usk";
// let welcomeMessage = `${i}px`;
// let rootElement = document.getElementById("root");
// rootElement.style.display = "flex";
// rootElement.style.flexWrap = "wrap";
// rootElement.style.width = "850px";
// for (let i = 0; i < 64; i++) {
//   let newDiv = document.createElement("div");
//   rootElement.appendChild(newDiv);
//   newDiv.style.width = "100px";
//   newDiv.style.height = "100px";
//   newDiv.style.border = "1px  solid black";
//   if ((i + (Math.floor(i / 8) % 2)) % 2 == 0) {
//     newDiv.style.backgroundColor = "green";
//   }
// }
// let lootElement = document.getElementById("root");
// let hour = 0;
// let min = 0;
// let sec = 0;
// let day = 0;
// setInterval(function () {
//   sec++;
//   if (sec == 60) {
//     sec = 0;
//     min++;
//   }
//   if (min == 60) {
//     min = 0;
//     hour++;
//   }
//   if (hour == 24) {
//     hour = 0;
//     day++;
//   }
//   rootElement.innerText = `${
//     hour < 10 ? "0" : ""
//   }${hour}:${min} < 10 ? "0" : "" }${min}:${sec} `;
// }, 10);
