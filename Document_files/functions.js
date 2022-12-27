//text hewleh//
function greet() {
  console.log("hi!");
}
greet();
greet();
greet();
greet();
greet();
greet();
greet();
{
  function myFunction(p1, p2, p3) {
    return p1 + p2 + p3;
  }
  let result = myFunction(1, 2, 3);
  console.log(result);
}
//utga//
{
  function add(number1, number2) {
    return number1 + number2;
  }
  let number1 = parseFloat(prompt("Enter first number"));
  let number2 = parseFloat(prompt("Enter second number"));

  let result = add(number1, number2);
  console.log("result");
}

let a = function (name) {
  return "Hello " + name;
};
let b = (name) => {
  return "Hello" + name;
};
console.log(a("heheheheheh"));
