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
module.exports.alumnos = alumnos;