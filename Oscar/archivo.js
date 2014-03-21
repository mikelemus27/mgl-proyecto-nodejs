var fs  = require("fs");
fs.readFile('c:/archivo.txt', function(err, f){
    var array = f.toString().split('\n').length;
	/*var denuez= array[0].split(',').length;
    console.log(denuez);*/
	console.log(array);
});