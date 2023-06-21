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
 


function fetchingdatausingThen(){
    const start = new Date().getTime();
    // fetchRes is the promise to resolve
        // it by using.then() method
    let fetchVedio = fetch("https://download.samplelib.com/mp4/sample-30s.mp4");
        fetchVedio.then(res =>res.blob())
        .then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob);
        writeFileSync('./Outputsecond.mp4',objectURL );
        const end = new Date().getTime();
        const timetaken = (end -start)
        console.log("ˇTime taken to fetch data using .then()",timetaken)
          });
}
fetchingdatausingThen()
movieDatafetch();


  
