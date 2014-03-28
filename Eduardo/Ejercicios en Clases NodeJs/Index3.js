var http = require('http');
var url = require ("url");
var fs= require ("fs");

http.createServer(function (req, res) {

var pathname = url.parse(req.url).pathname;
console.log(pathname+ " Esto se ve en node");

if(pathname == "/"){


 res.writeHead(200, {'Content-Type': 'text/html'});
html  = fs.readFileSync('Pagina.html','utf8');
res.write(html);
}
 else if(pathname == "/lib-javaScript.js"){
 	
 	res.writeHead(200, {'Content-Type': 'text/javascript'});
 	res.write("Saludos = function() {alert ('Hola bienvenido');}");

	script = fs.readFileSync("lib-javaScript.js","utf8");
 }
 
 
 res.end();
}).listen(8888,'127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');