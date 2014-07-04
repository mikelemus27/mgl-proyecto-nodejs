var express=require('express');
var connect=require('connect');
var app=express();
var http = require('http');
var utils=require('util');
var qs = require('querystring');
var envio=require('./Controller');
var send=new envio();
var objeto;
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
				
				var request=req.body;
				objeto=send.Data(request.Key,request.Name,request.Turn,request.Credits,request.Teacher);			
				console.log("server");
				
				
				
			});

app.post('/consultar.html', function(req,res)
			{
				var request=req.body;
				send.View();
				var json="";
				res.writeHead(200,{ ' content-type' : ' application/json'});
				json=send.View();
				res.write(json);
				res.end();
				
			});
app.post('/read.html',function(req, res){
				
				var json="";
				res.writeHead(200, {'content-type' : 'application/json'});
				json=send.Read();
				res.write(json);
				console.log("read");
				res.end();
			});

app.post('/eliminar.html', function(req,res)
			{
				var request=req.body;
				send.deleteObject(request.Key);
				
			});

app.listen(8888, 'localhost');
console.log('Server running at http://127.0.0.1:8888');
