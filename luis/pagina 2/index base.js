var http = require('http');
var url = require("url");

http.createServer(function (req, res) {
var pathname =url.parse(req.url).pathname;
console.log("Request for "+ pathname +" received");
if(pathname =="/"){
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(
 '<!doctype html>\n'+
 '<html lang="en">\n' +
     '<head>\n'+
         '<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' +
         '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
		 '<script src="saludo.js"  type="text/javascript" ></script>'+
     '</head>\n'+
     '<body>\n<h1>Euro 2012 teams</h1>\n' +
         '<div id="content">'+
             '<p>The teams in Group D for Euro 2012 are:</p>'+
             '<ul>'+
                 '<li>England</li>'+
                 '<li>France</li>'+
                 '<li>Sweden</li>'+
                 '<li>Ukraine</li>'+
             '</ul>'+
         '</div>'+
		 '<button onclick="saludar()">saludar</button>\n'+
		 '<script type="text/javascript"> saludar(); </script>'+
        '\n'+
     '</body>\n'+
 '</html>');
 } else if (pathname == "/saludo.js"){
res.writeHead(200, {'Content-Type': 'text/javascript'});
 res.write("saludar=function(){alert('hola mundo');}");
 }
 res.end();
}).listen(8888, '127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');