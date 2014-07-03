var http= require('http');
var utils=require('util');
var hola= require('./hola');
console.log(hola.Hola());
http.createServer(function (req,res)
	{
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(hola.Hola());
		
		res.end();
	}).listen(8888, 'localhost');//.listen(8888, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:8888');
