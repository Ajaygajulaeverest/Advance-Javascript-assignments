var callfunction = { num: 2 };
function add(a, b) {
  return this.num + a + b;
}
const resultCall = add.call(callfunction, 3, 5);

var number = { num: 2 };
function sub(a, b) {
  return this.num + a -b;
}
const resultApply = sub.apply(number, [3, 5]);

var number2 = { num: 2 };
function multi(a, b) {
  return this.num + a + b;
}
const funcBind = multi.bind(number2, 3, 5);
const resultBind = funcBind();

console.log(resultCall, resultApply, resultBind);
