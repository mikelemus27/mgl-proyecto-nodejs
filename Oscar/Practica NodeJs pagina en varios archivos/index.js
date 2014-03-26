var http = require('http');
var url = require ("url");
var fs= require ("fs");

http.createServer(function (req, res) {

var pathname = url.parse(req.url).pathname;
console.log(pathname+ " Esto se ve en node");

if(pathname == "/"){


 res.writeHead(200, {'Content-Type': 'text/html'});
html  = fs.readFileSync('pagina.html','utf8');
res.write(html);
}
 else if(pathname == "/libreria.js"){
 	
 	res.writeHead(200, {'Content-Type': 'text/javascript'});
 	res.write("mensaje = function() {alert ('hola');}");
	
	script = fs.readFileSync("libreria.js","utf8");
 }
 
 
 res.end();
}).listen(8888,'127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');