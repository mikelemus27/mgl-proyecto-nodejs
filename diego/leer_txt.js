var fs  = require("fs");
array = fs.readFileSync("D:\\bd.txt").toString().split(",");
console.log(array);