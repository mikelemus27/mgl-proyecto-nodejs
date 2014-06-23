var http = require('http');
var url = require ("url");
var querystring= require("querystring");
var fs= require ("fs");
var vista = require ("./Vista.js");
var inicio = new vista();



http.createServer(function (req, res) {

var pathname = url.parse(req.url).pathname;


if(pathname == "/"){

res.writeHead(200, {'Content-Type': 'text/html'});
html  = fs.readFileSync('index.html','utf8');
res.write(html);


}

else if(req.method=="POST") {
   
    var fullBody = '';
    
    req.on('data', function(chunk) {
     
      fullBody += chunk.toString();
    });
	
	req.on('end', function() {
	  
	  var decodedBody = querystring.parse(fullBody);
      var post= JSON.stringify(decodedBody);
          post=JSON.parse(post) ;
		 
		 
		 //IF's para leer la opcion del boton		  	  
			if(post.btnINDICADOR.toString()=="Pedirdatos"){
			
				console.log("Se esta capturando");
				
					res.writeHead(200, {'Content-Type': 'text/html'});
					html  = fs.readFileSync('Pedirdatos.html','utf8');
					res.write(html);
					
			}
			else if(post.btnINDICADOR.toString()=="Modificar"){
			var datos=inicio.Editar();
			res.write(datos.toString());
		
			}
			else if(post.btnINDICADOR.toString()=="Mostrar"){
	         var datos=inicio.Mostrar();
             res.write(datos.toString());
			
			}

			else if(post.btnINDICADOR.toString()=="Buscar"){
			        res.writeHead(200, {'Content-Type': 'text/html'});
					html  = fs.readFileSync('buscarDato.html','utf8');
					res.write(html);
			}			
			else if(post.btnINDICADOR.toString()=="Regresar"){
					
					res.writeHead(200, {'Content-Type': 'text/html'});
					html  = fs.readFileSync('index.html','utf8');
					res.write(html);
					
			}
			else if(post.btnINDICADOR.toString()=="Guardar"){
			   inicio.Pedirdatos(post.txtTema.toString(),post.txtSubtemas.toString(),post.txtUnidades.toString(),post.txtOG.toString(),post.txtBibliografia.toString());
					res.writeHead(200, {'Content-Type': 'text/html'});
					html  = fs.readFileSync('index.html','utf8');
					res.write(html);
                   }
			else if(post.btnINDICADOR.toString()=="Busqueda"){
			     var x=inicio.Busqueda(post.txtVALOR.toString());	
			//var x=inicio.Busqueda(post.txtVALOR.toString());				 
					res.write(
							'<html>'+x.toString()+'<br>'+
								'<form method=post action="http://127.0.0.1:8888/servidor.js">'+
									'<INPUT name="btnINDICADOR" type="submit" value="Regresar" />'+
								'</form>'+
							'</html>'
							);
					}
	
	

	res.end();
		});
		
		
}

}).listen(8888,'127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');