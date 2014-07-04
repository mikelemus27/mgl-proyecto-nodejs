var express=require('express');
var connect=require('connect');
var app=express();
var http = require('http');
var utils=require('util');
var qs = require('querystring');
var capture=require('./entidadMATERIAS');
var fs = require('fs');

var classArchivo=function(){}
classArchivo.prototype.Guardar=function(captura)
{
	fs = require('fs');
	var datos=captura;
	
	var cadena=(datos);
	
	fs.writeFile('C:/mgl-proyecto-nodejs/erik/ejercicio_crud_avanzado/materias.txt',cadena, function (err) {
	  if (err) return console.log(err);
	  console.log('Guardado');
	});
}
classArchivo.prototype.Cargar=function()
{
	var arrayTemp=[];
	var arrayDatos=[];
	exist=fs.existsSync("./materias.txt");
	if (exists==true)
	{
		var arreglo=fs.readFileSync("./materias.txt").toString();
		for(i;i<5;i++)
		{
			arrayTemp=arreglo[i].split(",");
			arrayDatos.push(arrayTemp);
			
		}
	}
	return (this.arrayDatos);
	
}
module.exports=classArchivo;
