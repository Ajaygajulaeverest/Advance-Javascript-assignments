var callfunction = { num: 2 };
function add(a, b) {
  return this.num + a + b;
}
const resultCall = add.call(callfunction, 3, 5);

var number = { num: 2 };
function add(a, b) {
  return this.num + a + b;
}
const resultApply = add.apply(number, [3, 5]);

var number2 = { num: 2 };
function add(a, b) {
  return this.num + a + b;
}
const funcBind = add.bind(number2, 3, 5);
const resultBind = funcBind();

console.log(resultCall, resultApply, resultBind);
