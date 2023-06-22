const electro = 3;
const thunder = 3.5;
const bolt = 4;
const lucabill = [1, 3, 4, 6, 7, 9, 10];
const lucusbill = [1, 2, 3, 6, 7, 10, 12];
const flag = 0;

const totallucareading = lucabill.reduce((first, next) => {
  return first + next;
});
const totallucusreading = lucusbill.reduce((first, next) => {
  return first + next;
});

function discountbill(value) {
  if (value % 2 == 0) {
    return (value / 100) * 90;
  }
  return (value / 100) * 88;
}

if (flag == 1) {
  var lucareading = lucabill.map(discountbill);
  var lucusreading = lucusbill.map(discountbill);
} else {
  lucareading = lucabill;
  lucusreading = lucusbill;
}

function modified(num) {
  return num * electro;
}

const modifiedlucabill = lucareading.map(modified);
const modifiedlucusbill = lucusreading.map(modified);
// console.log(modifiedlucabill)
const totallucabill = modifiedlucabill.reduce((first, next) => {
  return first + next;
});
const totallucusbill = modifiedlucusbill.reduce((first, next) => {
  return first + next;
});
console.log("totoal lucareading", totallucareading);
console.log("totoal lucareading", totallucusreading);
console.log("disconted lucabill", modifiedlucabill);
console.log("totallucabill when electrocharged", totallucabill);
console.log("disconted lucsbill", modifiedlucusbill);
console.log("totallucusbill when electrocharged", totallucusbill);

// module.exports = modified;
module.exports = { modified, discountbill };
