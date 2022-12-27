// let btn = document.getElementById("btn");
// btn.addEventListener("click",() => {
//   fetch("http://localhost:3333/api/cars",{

//     method: "DELETE",
//     mode: "no-cords",
//     headers:{
//       'Content-Type: application/json',
//     },
//     })

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
});
