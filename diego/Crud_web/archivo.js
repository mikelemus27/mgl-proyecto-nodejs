var leer = function(){
	var fs  = require("fs");
	var arraySaltos = [];
	var arrayComas = [];
	var existe = null;
	var a=""
	existe =fs.existsSync("./alumnos.txt");
	if (existe===true){
		var arraySaltos = fs.readFileSync("./alumnos.txt").toString().split("\r\n");
		for (i;i<arraySaltos.length;i++){
			a=arraySaltos[i].split(",");
			arrayComas.push(a)

		}
 		console.log("leyendo archivo.......");
 		//console.log(arrayComas);	
	}
	else{
		var array = [null,null,null,null,null];
		console.log("archivo no existe");
	}
 	return (arrayComas);
}

var escribir=function(res){
	var fs = require("fs")
	fs.open('./alumnos.txt', 'w',function opened(err, fd) {
			if (err) { return callback(err); }
				function notifyError(err) {
					console.log("error")
					fs.close(fd, function() {
						callback(err);
					});
				}
			fs.write(fd, res, 0, res.length, null, function regreso(){
			});
	});
}
module.exports.escribir = escribir;
module.exports.leer = leer;