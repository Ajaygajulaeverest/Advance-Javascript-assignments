let ratelimit = 4;
let Apikey = "";
let requests = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 3, 1, 3, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1,
  2, 3, 3, 1, 3, 3,
];

if (ratelimit === NaN || Apikey === "") {
  console.log("fileds are missing");
}

c = 0;
function ratelimits() {  
  for (let i = 0; i < requests.length; i++) {
    c = c + 1;
    console.log(requests[i]);
    if (c % ratelimit == 0) {
      console.log("time has exceeded ");
    }
  }
}
setTimeout(ratelimits,2000)

