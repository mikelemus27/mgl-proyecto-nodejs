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
var vista = function (){

}
	vista.prototype.pedir = function (){
		var pro = new proceso();
		var model = new alumnos();
		var view = new vista();
		var a = null
		pro.ask("Nombre", /.+/, function(nombre) {model.setNombre(nombre)
    	pro.ask("Edad", /.+/, function(edad) {model.setEdad(edad)
    		pro.ask("Carrera", /.+/, function(carrera) {model.setCarrera(carrera)
      			pro.ask("Semestre", /.+/, function(semestre) {model.setSemestre(semestre)
        			pro.ask("Numero de control", /.+/, function(numero) {model.setNumero(numero)
	  					console.log("");
	  					a=model
	  					view.mostrar(a);
 					});
				});
			});
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
var control = function(){}
	control.prototype.inicio = function(){
		var view = new vista();
		view.pedir();
	}
var main=new control();
main.inicio();