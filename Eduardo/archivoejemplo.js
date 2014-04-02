var fs = require("fs");
console.log("Starting");
fs.readFile("example.txt", function(error, data) {
    console.log("Contents of file: " + data);
});


fs.writeFile('example.txt', 'Hello Node bienvenido', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
console.log("Carrying on executing");