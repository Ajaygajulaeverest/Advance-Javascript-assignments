// import { error } from "console";

const url = "https://everest.engineering/users?id=7&name=ajay";
const code = {
  autorization: "Bearer QmFzZTY0",
  Xratelimit: 10,
};
function validation() {
  const validhttp = "https://everest.engineering/users";
  let inputurl = url.split("?");
  const regexid = new RegExp("^[0-9]");
  const regexname = new RegExp("^[a-z]");
  let httpformat = inputurl[1];
  let nameid = httpformat.split("&");
  let id = nameid[0].split("=");
  let namestring = nameid[1].split("=");
  if (regexid.test(id[1]) === true && regexname.test(namestring[1]) === true) {
    console.log("id was valid in the url--", nameid[0]);
    // console.log("name was valid in the url--", nameid[1]);
  } else {
    throw new Error("name or id was invalid");
    // console.log("name or id was invalid");
  }
  if (inputurl[0] === validhttp) {
    // console.log(validhttp);
  } else {
    // console.log("error was encountered in http format");
    throw new Error("error was encountered in http format");
  }
}
validation();
function stringvalidator() {
  var stringkey = Object.values(code)[0];
  const myArray = stringkey.split(" ");
  var inputstring = myArray[1];
  var encodedStringAtoB = "Base64";
  var decodedStringA = atob(inputstring);
  const Xrate = 10;
  const Xratelimit = Object.values(code)[1];
  if (decodedStringA === encodedStringAtoB && Xratelimit === Xrate) {
    console.log(encodedStringAtoB);
    console.log(Xrate);
    return decodedStringA, Xrate;
  } else {
    // console.log("details were not matched ");
    throw new Error("details were not matched ");
  }
}
stringvalidator();
module.exports = {stringvalidator,validation,atob}  ;
