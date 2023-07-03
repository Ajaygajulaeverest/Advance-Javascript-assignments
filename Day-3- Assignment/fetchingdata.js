
import { writeFileSync } from "fs";
function fetchingdatausingThen(){
    const start = new Date().getTime();
    let fetchRes = fetch("https://download.samplelib.com/mp4/sample-30s.mp4");
        const end = new Date().getTime();
        const timetaken = (end -start)
        console.log("ˇTime taken to fetch data using .then()",timetaken)
        fetchRes.then(res =>res.blob())
        .then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob);
        writeFileSync('./Outputsecond.mp4',objectURL );
          });
}
fetchingdatausingThen()
