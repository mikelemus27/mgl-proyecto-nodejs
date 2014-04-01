var fs = require("fs");
//res.write(script);
var http = require('http');
var url = require('url');
http.createServer(function (req, res) {

//---------------------------
var pathname = url.parse(req.url).pathname;
  //console.log("Reques for" + pathname + "received.");
  
  if(pathname == "/"){
  
 //res.write(
//---------------------------
  res.writeHead(200, {'Content-Type': 'text/html'});
  script = fs.readFileSync("variablehtml.html", 'utf8');
 
  
 res.write(script);
 
 }else if(pathname == "/lib-javascript.js"){
  res.writeHead(200, {'Content-Type': 'text/javascript'});
  res.write("alerta = function(){alert('hola desde node');}");
  
 // script = fs.readFileSync("lib-javascript.js", "utf8")
}

res.end();
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');