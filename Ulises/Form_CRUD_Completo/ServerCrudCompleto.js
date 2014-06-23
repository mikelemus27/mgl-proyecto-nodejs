var http = require("http");
var querystring= require("querystring");
var utils= require("util");
var port = 3000;
var serverUrl = "localhost";
var fs= require ("fs");
var vistacontrolCarrera = require ("./VistaControlCarrera.js")
var objVistCtrlCarrera = new vistacontrolCarrera();

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

      //var post=JSON.eval(utils.inspect(decodedBody));
      var post= JSON.stringify(decodedBody);
          post=JSON.parse(post) ;
	
	

		   //IF's para leer la opcion del boton		  	  
			if(post.button.toString()=="Capturar"){
			
				  
				
					res.writeHead(200, {'Content-Type': 'text/html'});
					html  = fs.readFileSync('Capturar.html','utf8');
					res.write(html);
					
			}
			else if(post.button.toString()=="Actualizar"){
			var data=objVistCtrlCarrera.Modificar();
			res.write(data.toString());
		
			}
			else if(post.button.toString()=="Mostrar"){
	         var data=objVistCtrlCarrera.Mostrar();
             res.write(data.toString());
			
			}

			else if(post.button.toString()=="Buscar"){
			        res.writeHead(200, {'Content-Type': 'text/html'});
					html  = fs.readFileSync('Buscar.html','utf8');
					res.write(html);
			}			
			else if(post.button.toString()=="Regresar"){
					
					res.writeHead(200, {'Content-Type': 'text/html'});
					html  = fs.readFileSync('FormCRUD_COMPLETO.html','utf8');
					res.write(html);
					
			}
			else if(post.button.toString()=="Guardar"){
			   objVistCtrlCarrera.Capturar(post.carrera.toString(),post.creditos.toString(),post.clave.toString(),post.area.toString(),post.tipo.toString());
					res.writeHead(200, {'Content-Type': 'text/html'});
					html  = fs.readFileSync('FormCRUD_COMPLETO.html','utf8');
					res.write(html);
                   }
			else if(post.button.toString()=="Busqueda"){
			     var data=objVistCtrlCarrera.Busqueda(post.txtData.toString());	 
					res.write(
							'<html>'+data.toString()+'<br>'+
								'<form method=post action="http://127.0.0.1:8888/ServerCrudCompleto.js">'+
									'<INPUT name="button" type="submit" value="Regresar" />'+
								'</form>'+
							'</html>'
							);
					}
	
            else if(post.button.toString()=='Eliminar'){
					console.log('Eliminando');
					fs.writeFile("./archivo.csv", "" );
					res.writeHead(200, {'Content-Type': 'text/html'});
					html  = fs.readFileSync('FormCRUD_COMPLETO.html','utf8');
					res.write(html);
					res.end();
			}
 
         
      
      res.end();
    });  
    
  } else {
    console.log("[405] " + req.method + " to " + req.url);
    res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  }


});
console.log('Server running at http://127.0.0.1:8888');
server.listen(8888, '127.0.0.1');;