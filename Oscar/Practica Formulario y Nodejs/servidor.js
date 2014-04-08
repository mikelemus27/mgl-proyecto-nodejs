var http = require('http');
var url = require ("url");
var querystring= require("querystring");
var fs= require ("fs");


http.createServer(function (req, res) {

var pathname = url.parse(req.url).pathname;


if(pathname == "/"){

res.writeHead(200, {'Content-Type': 'text/html'});
html  = fs.readFileSync('formulario.html','utf8');
res.write(html);
}

else if(req.method=="POST") {
   
	console.log("[200] " + req.method + " to " + req.url);
    var fullBody = '';
    
    req.on('data', function(chunk) {
     
      fullBody += chunk.toString();
    });
	
	req.on('end', function() {
	  
	  var decodedBody = querystring.parse(fullBody);
      var post= JSON.stringify(decodedBody);
          post=JSON.parse(post) ;

		  txt1= post.numeroa.toString();
          txt2= post.numerob.toString();
      var resultado=parseInt(txt1)+parseInt(txt2);
			res.write("El resultado es: ");
	        res.write(resultado.toString());
			
	res.end();
		});
		
		
}
  

 
}).listen(8888,'127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');