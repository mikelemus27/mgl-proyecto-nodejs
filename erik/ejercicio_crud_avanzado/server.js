var express=require('express');
var connect=require('connect');
var app=express();
var http = require('http');
var utils=require('util');
var qs = require('querystring');
var capture=require('./classMaterias');
var archivo=require('./archivo');

app.use(connect.json());
app.use(connect.urlencoded());
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.post('/encapsular.html', function(req,res)
			{
				var clave=req.body.Key;
				var nombre=req.body.Name;
				var turno=req.body.Turn;
				var creditos=req.body.Credits;
				var maestro=req.body.Teacher;
				var captura=new capture;
				captura.setClave(clave);
				captura.setNombre(nombre);
				captura.setTurno(turno);
				captura.setCreditos(creditos);
				captura.setMaestro(maestro);
				/*console.log(captura.getClave());
				console.log(captura.getNombre());
				console.log(captura.getTurno());
				console.log(captura.getCreditos());
				console.log(captura.getMaestro());*/
				var guardar=new archivo;
				guardar.Guardar(captura);
				
				
			});
app.listen(8888, 'localhost');
console.log('Server running at http://127.0.0.1:8888');
