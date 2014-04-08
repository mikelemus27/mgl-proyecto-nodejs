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
		var pro = new proceso();
		var model = new alumnos();
		var view = new vista();

		pro.ask("Nombre", /.+/, function(nombre) {model.setNombre(nombre)
    	pro.ask("Edad", /.+/, function(edad) {model.setEdad(edad)
    		pro.ask("Carrera", /.+/, function(carrera) {model.setCarrera(carrera)
      			pro.ask("Semestre", /.+/, function(semestre) {model.setSemestre(semestre)
        			pro.ask("Numero de control", /.+/, function(numero) {model.setNumero(numero)
	  					console.log("");
	  					//cadena= (model.getNombre()+","+model.getEdad()+","+model.getCarrera()+","+model.getSemestre()+","+model.getNumero());
	  					//datos = new Buffer(cadena);
	  					view.mostrar(model);
	  					});
						});
 					});
				});
			});
	}
	vista.prototype.mostrar = function(a){
		var view = new vista();
		console.log(" ");
		console.log("Nombre: ", a.getNombre());
		console.log("Edad : ", a.getEdad());
		console.log("Carrera :", a.getCarrera());
		console.log("Semestre :", a.getSemestre());
		console.log("Numero de control :", a.getNumero());
		console.log("")
		view.menu(a);
		//file.escribir(datos);
		//process.exit();
	}
	vista.prototype.menu = function(modelo){
		var pro = new proceso();
		var con = new control();
		var view = new vista();
		console.log("--- CONTROL DE ALUMNOS---");
		console.log(" selecciona la opcion deseada");
		console.log(" 1.- Mostrar los datos");
		console.log(" 2.- Modificar los datos");
		console.log(" 3.- Eliminar los datos");
		console.log(" 4.- Guardar en archivo");
		console.log(" 5.- Salir");
		pro.ask("Opcion", /.+/, function(opcion) {con.control_menu(opcion,modelo);
			
			//view.mostrar(modelo);
			//process.exit();
		});
	}

var proceso = function(){}
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
	proceso.prototype.eliminar = function(model){
		var view = new vista();
		model.setNombre(null);
		model.setEdad(null);
		model.setCarrera(null);
		model.setSemestre(null);
		model.setNumero(null);
		view.mostrar(model);
	}
var archivo = function(){}
	archivo.prototype.leer = function(){
		var model = new alumnos();
		var view = new vista();
		var file = new archivo();
		var fs  = require("fs");
		fs.exists("./alumnos.txt", function(exists)
		{
		if (exists===true){
			array = fs.readFileSync("./alumnos.txt").toString().split(",");
			console.log("leyendo archivo.......")
			model.setNombre(array[0]);
			model.setEdad(array[1]);
			model.setCarrera(array[2]);
			model.setSemestre(array[3]);
			model.setNumero(array[4]);
			view.menu(model);
		}
		else{
			console.log("creando nuevo archivo......")
			model.setNombre(null);
			model.setEdad(null);
			model.setCarrera(null);
			model.setSemestre(null);
			model.setNumero(null);
			cadena= (model.getNombre()+","+model.getEdad()+","+model.getCarrera()+","+model.getSemestre()+","+model.getNumero());
			file.escribir(new Buffer(cadena));
			//view.pedir();
		}
	});
		//view.menu();
	}

	archivo.prototype.escribir = function(cadena,modelo){
			var fs = require("fs")
			var view = new vista();
			fs.open('./alumnos.txt', 'w', function opened(err, fd) {
				if (err) { return callback(err); }
					function notifyError(err) {
						console.log("error")
						fs.close(fd, function() {
							callback(err);
						});
					}
				fs.write( fd, cadena, 0, cadena.length, null, function regreso(){
					view.mostrar(modelo);
				});
			});
		}

var control = function(){}
	control.prototype.inicio = function(){
		var file = new archivo();
		file.leer();
		//var view = new vista();
		//view.menu();
	}
	control.prototype.control_menu = function(opcion,modelo){
		var view = new vista();
		var pro = new proceso();
		var file = new archivo();
		console.log(opcion);
		//view.mostrar(datos);
		if(opcion==1){
			view.mostrar(modelo);
		}
		if(opcion==2){
			view.pedir();
		}
		if(opcion==3){
			pro.eliminar(modelo);
		}
		if(opcion==4){
			cadena= (modelo.getNombre()+","+modelo.getEdad()+","+modelo.getCarrera()+","+modelo.getSemestre()+","+modelo.getNumero());
			file.escribir(new Buffer(cadena),modelo);
		}
		if(opcion==5){
			process.exit();
		}

	}
var main=new control();
	main.inicio();