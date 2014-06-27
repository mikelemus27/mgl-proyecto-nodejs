var express = require('express');
var app = express();
var control =require("./control");

app.use(express.json());
app.use(express.urlencoded());
app.use(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/leer.html',function(req, res){
	var json="";
	res.writeHead(200, {'content-type' : 'application/json'});
	json=control.leer();
	res.write(json);
	res.end();
	});

app.post('/modificar.html',function(req, res){
	var json="";	
	res.writeHead(200, { 'content-type' : 'application/json'});
	json=control.modificar(req);
	res.write(json);
	res.end();
});

app.post('/guardar.html',function(req, res){
	var json="";
	res.writeHead(200, { 'content-type' : 'application/json'});
	json=control.guardar(req);
	res.write(json);
	res.end();
});
app.post('/eliminar.html',function(req, res){
	var objToJson ="";
	var pre=""

	//console.log("en app.post")
	res.writeHead(200, { 'content-type' : 'application/json'});
	pre=control.eliminar(req.body.clave);
	//console.log(pre);
	objToJson={
		datos:pre
	};
	json = JSON.stringify(objToJson);
	//console.log(objToJson);
	res.write(json);
	res.end();
});
app.listen(8888,"localhost");
console.log('listening');