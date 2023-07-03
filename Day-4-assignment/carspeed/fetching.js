// let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos");
// let Products = fetchRes.t;
// console.log(Products)
async function getSampleText() {
  const textdata = await fetch("https://jsonplaceholder.typicode.com/users");
  const vedioData = await textdata.text();
  console.log(vedioData);
}
getSampleText();
