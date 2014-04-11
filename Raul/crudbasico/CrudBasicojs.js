var http = require("http");
var querystring= require("querystring");
var utils= require("util");


var server = http.createServer(function(req, res) 
{

  console.log("Request: " + req.url);
  
             if (req.method == 'POST') {
               console.log("[200] " + req.method + " to " + req.url);
			
				
				var fullBody = '';
    
    req.on('data', function(chunk) {
      // append the current chunk of data to the fullBody variable
      fullBody += chunk.toString();
    });
    
    req.on('end', function() {
    
      // request ended -> do something with the data
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      
      // parse the received body data
      var decodedBody = querystring.parse(fullBody);

     
      var post= JSON.stringify(decodedBody);
          post=JSON.parse(post) ;
		  
		  
      // output the decoded data to the HTTP response          
          res.write('<html><head><title>Pagina Post</title></head><body><pre>');
          res.write("CRUD BASICO");
		  res.write("</br>");
		  res.write("Entidad Actividades Didacticas");
		  
          res.write("</br>");
		  nombre= post.txtNombre;
		  res.write("Ac Nombre:  ");
		  res.write(nombre);
		 
		  res.write("</br>");
          tipo= post.txtTipo;
		  res.write("Ac Tipo:  ");
          res.write(tipo);
		  
		  res.write("</br>");
          recurso= post.txtRecurso;
		  res.write("Ac Recurso:  ");
          res.write(recurso);
		  
		  res.write("</br>");
          tiempo= post.txtTiempo;
		  res.write("Ac Tiempo:  ");
          res.write(tiempo);
		  
		  res.write("</br>");
          materia= post.txtMateria;
		  res.write("Ac Materia:  ");
          res.write(materia);
	     
          res.write("</br>");
		  res.write("Direccion: http://127.0.0.1 Puerto: 3000");
		  res.write("</br>");
      res.write('</pre></body></html>');
      
      res.end();
    });
    
  } else {
    console.log("[405] " + req.method + " to " + req.url);
    res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  }
 // res.end(html);

});
console.log("listen:http://127.0.0.1:3000");
server.listen(3000,'127.0.0.1');