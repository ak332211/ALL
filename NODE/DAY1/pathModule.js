// console.log(__filename);
// console.log(__dirname);

// console.log(console);
// console.error("ERROR");

const path=require("path");
var pathObj=path.parse(__filename);
console.log(pathObj);
console.log(pathObj.name);