var alumnos = function (){
		nombre = ""
		edad = 0
		carrera = ""
		semestre = 0
		numero=  ""
	}
	alumnos.prototype.setNombre = function(nombre){
		this.nombre = nombre;
	}
	alumnos.prototype.getNombre = function(){
		return this.nombre;
	}
	alumnos.prototype.setEdad= function (edad){
		this.edad = edad;
	}
	alumnos.prototype.getEdad = function(){
		return this.edad;
	}
	alumnos.prototype.setCarrera = function(carrera){
		this.carrera=carrera;
	}
	alumnos.prototype.getCarrera = function(){
		return this.carrera;
	}
	alumnos.prototype.setSemestre = function(semestre){
		this.semestre = semestre;
	}
	alumnos.prototype.getSemestre = function(){
		return this.semestre
	}
	alumnos.prototype.setNumero = function(numero){
		this.numero = numero;
	}
	alumnos.prototype.getNumero = function(){
		return this.numero
	}
var vista = function (){}
	vista.prototype.pedir = function (){
	    var cadena= "";
	  var 	a = new Buffer(cadena);
		var pro = new proceso();
		var model = new alumnos();
		var view = new vista();
		var file = new archivo();
<<<<<<< Updated upstream
		var self=this;
		file.escribir(a);
=======
		var self = this;	
>>>>>>> Stashed changes
		pro.ask("Nombre", /.+/, function(nombre) {model.setNombre(nombre)
		self.file.escribir(a);
    	pro.ask("Edad", /.+/, function(edad) {model.setEdad(edad)
    	self.file.escribir(a);
    		pro.ask("Carrera", /.+/, function(carrera) {model.setCarrera(carrera)
    		self.file.escribir(a);
      			pro.ask("Semestre", /.+/, function(semestre) {model.setSemestre(semestre)
      			self.file.escribir(a);
        			pro.ask("Numero de control", /.+/, (function(numero) {model.setNumero(numero)
	  					console.log("");
	  					cadena= (model.getNombre()+","+model.getEdad()+","+model.getCarrera()+","+model.getSemestre()+","+model.getNumero());
	  					a = new Buffer(cadena);
	  					self.file.escribir(a);
	  					view.mostrar(model);
	  					}));
						});
 					});
    		//file.escribir(a);
				});
			});
	}
	vista.prototype.mostrar = function(a){
		console.log(" ");
		console.log("Nombre: ", a.getNombre());
		console.log("Edad : ", a.getEdad());
		console.log("Carrera :", a.getCarrera());
		console.log("Semestre :", a.getSemestre());
		console.log("Numero de control :", a.getNumero());
    	process.exit();
	}

var proceso = function(){};
	proceso.prototype.ask = function(question, format, callback) {
 		var stdin = process.stdin, stdout = process.stdout;
 		stdin.resume();
 		stdout.write(question + ": ");
 		stdin.once('data', function(data) {
   			data = data.toString().trim();
   			if (format.test(data)) {
     			callback(data);
   			} else {
     			stdout.write("It should match: "+ format +"\n");
     		ask(question, format, callback);
   			}
 		});
	}

var archivo = function(){};
	archivo.prototype.leer = function(){
		var model = new alumnos();
		var view = new vista();
		var fs  = require("fs");
		fs.exists("D:\\bd.txt", function(exists)
		{
		if (exists===true){
			array = fs.readFileSync("D:\\bd.txt").toString().split(",");
			console.log("leyendo archivo.......")
			model.setNombre(array[0]);
			model.setEdad(array[1]);
			model.setCarrera(array[2]);
			model.setSemestre(array[3]);
			model.setNumero(array[4]);
			view.mostrar(model);
		}
		else{
			console.log("creando nuevo archivo......")
			view.pedir();
		}
	});
	}
	
	archivo.prototype.escribir = function(cadena){
			var fs = require("fs")
			fs.open('./alumnos.txt', 'a', function opened(err, fd) {
				if (err) { return callback(err); }
					function notifyError(err) {
						console.log("error")
						fs.close(fd, function() {
							callback(err);
						});
					}
				fs.write( fd, cadena, 0, cadena.length, null);
			});
		//process.exit();
		}
		
var control = function(){}
	control.prototype.inicio = function(){
		var file = new archivo();
	//	a= new Buffer("hola");
		var view = new vista();
		view.pedir();
		//var fs = require("fs");
		//var model = new alumnos();
		//fs.open("D:\\bd.txt",'a');
		//fs.write(model.getNombre,model.getEdad,model.getCarrera,model.getSemestre,model.getNumero);
		//file.escribir(a);
	}
//var file = new archivo();
//a= new Buffer("hola");
//file.escribir(a);
	var main=new control();
	main.inicio();
