let ratelimit = 3;
let Apikey = "";
let requests = [1, 2, 3, 4, 8, 65, 43, 2, 4, 5, 54, 5, 43, 3];

function ratelimits() {
  let c = 0;
  function condition() {
    if (ratelimit === NaN || Apikey === "") {
      console.log("error fileds are missing");
    }
  }
  function get() {
    for (let i = 0; i < requests.length; i++) {
      c = c + 1;
      if (c % ratelimit == 0) {
        console.log("rate limit has reached");
      }
    }
  }
  setTimeout(get, 2000);

  return { condition, ratelimits };
}
module.exports = { ratelimits };
ratelimits();

// function Lucusseries(){
//   const a= 1;
//   const b= 2;
//   function next (){

//   }
//   function previous(){

//   }
//   return {next,previous}
// }
