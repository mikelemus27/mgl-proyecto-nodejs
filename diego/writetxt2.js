escribir = function(cadena){
	var fs = require("fs")
	console.log(cadena)
	fs.open('./prueba1.txt', 'a', function opened(err, fd) {
		if (err) { return callback(err); }
			function notifyError(err) {
				fs.close(fd, function() {
					callback(err);
				});
			}
		bufferLength = cadena.length
		fs.write( fd, cadena, 0, bufferLength, null);
	});
}
a=new Buffer("hola");
escribir(a);


var archivo = function(){}
	archivo.prototype.escribir = function(cadena){
			console.log(cadena)
			var fs = require("fs")
			fs.open('diego/prueba7.txt', 'a', function opened(err, fd) {
				if (err) { return callback(err); }
					function notifyError(err) {
						console.log("error")
						fs.close(fd, function() {
							callback(err);
						});
					}
				console.log(cadena)
				fs.write( fd, cadena, 0, cadena.length, null);
				console.log(fd)
				console.log(typeof(fd))
			});
		}
		
var clase = function(){}
	clase.prototype.inicio = function(){
		var file = new archivo();
		a= new Buffer("adios");
		file.escribir(a)
	}
f= new clase();
f.inicio();