import {writeFileSync } from "fs";
async function movieDatafetch() {
    const start = new Date().getTime();
    const response = await fetch("https://download.samplelib.com/mp4/sample-30s.mp4");
    const vedioData = await response.arrayBuffer();
    const data = Buffer.from(vedioData);
    // console.log(data)
    writeFileSync('./Output.mp4', data);
    const end = new Date().getTime();
    const timetakentofetch = end -start;
    console.log("time taken to download using async",timetakentofetch);
  }
movieDatafetch();


  
