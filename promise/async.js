function prepare_breakfast() {
  let coffee_promise = new Promise((resolve, reject) =>
    resolve("coffee ready")
  );
  let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finishing frying egg");
    }, 1000);
  });
  let bacon_promise = new Promise(
    (resolve, reject) => resolve("bacon ready"),
    3000
  );
  let bread_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finishing toast bread");
    }, 2000);
  });
  let jam_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finishing jam on bread");
    }, 2000);
  });
  let eat_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("eating breakfast");
    }, 2000);
  });
  let combined_promise = Promise.all([
    coffee_promise,
    egg_promise,
    bacon_promise,
    bread_promise,
    jam_promise,
    eat_promise,
  ]);
  return combined_promise;
}
async function morning() {
  let result = await prepare_breakfast();
  console.log(result);
}
morning();
