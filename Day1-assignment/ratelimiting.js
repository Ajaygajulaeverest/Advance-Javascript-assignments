let ratelimit = 9;
let Apikey = "ajahy";
let requests = [1, 2, 3, 4, 8, 65, 43, 2, 4, 5, 54, 5, 43, 3];

function get() {
  if (ratelimit === NaN || Apikey === "") {
    console.log("error fileds are missing");
  }
  let c = 0;
  function ratelimits() {
    for (let i = 0; i < requests.length; i++) {
      c = c + 1;
      if (c % ratelimit == 0) {
        console.log("rate limit has reached");
      }
    }
  }
  setTimeout(ratelimits, 2000);
}
get();
