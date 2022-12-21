let count = 200;
document.getElementsByClassName("dummy")[0].innerText = "HHEHEH";
document.querySelector(".dummy").style.backgroundColor = "red";
let newDiv = document.createElement("div");
document.querySelector(".dummy").style.height = "200px";
setInterval(function () {
  count++;
  document.querySelector(".dummy").style.width = `${count}px`;
  if (count == 200) {
    clearInterval();
  }
}, 1);
