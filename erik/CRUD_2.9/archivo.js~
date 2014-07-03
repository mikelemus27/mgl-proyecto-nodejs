var express=require('express');
var connect=require('connect');
var app=express();
var http = require('http');
var utils=require('util');
var qs = require('querystring');
var capture=require('./classMaterias');
var fs = require('fs');

var classArchivo=function(){}
classArchivo.prototype.Guardar=function(captura)
{
	fs = require('fs');
	var datos=captura;
	console.log(datos.getClave());
	var cadena=(datos.getClave()+','+datos.getNombre()+','+datos.getTurno()+','+datos.getCreditos()+','+datos.getMaestro());
	fs.writeFile('C:/mgl-proyecto-nodejs/erik/ejercicio_crud_avanzado/materias.txt',cadena, function (err) {
	  if (err) return console.log(err);
	  console.log('Guardado');
	});
}
classArchivo.prototype.Cargar=function()
{
	fs.readFile('C:/mgl-proyecto-nodejs/erik/ejercicio_crud_avanzado/materias.txt', function(err, f)
		{
			var cadena1=f.toString().split(',').length;
			
		});
	return this.cadena1;
	
}
module.exports=classArchivo;
