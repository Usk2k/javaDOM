fetch("http://localhost:3333/api/cars")
  .then((res) => res.json())
  .then((data) => console.log(data));

let button = document.getElementById("#button");
let allBtn = document.getElementById("allBtn");
let root = document.getElementById("root");
root.style.display = "flex";
root.style.flexWrap = "wrap";

allBtn.addEventListener("click", () => {
  root.innerHTML = "";
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      res.map((car) => {
        let html = `<div class="card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 card="card-title">${car.model}>Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
        root.innerHTML += html;
      });
    });
});
