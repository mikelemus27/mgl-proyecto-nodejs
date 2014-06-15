     var http = require("http");
     var querystring= require("querystring");
     var utils= require("util");
     var fs = require('fs');
     var File= "archivo.txt";
    
	 var ModuloEntidad = require("./ModuloEntidad.js");
	 var ActividadesDidacticas = new ModuloEntidad();
	 
	var ModuloCargarArchivo = require("./ModuloCargarArchivo.js");
	var cargarModeloArchivo = new ModuloCargarArchivo();
	

	 console.log('clase servidor');
var server = http.createServer(function(req, res){
     console.log("Request: " + req.url);

	     if (req.method == 'POST') {
             console.log("[200] " + req.method + " to " + req.url);
             var fullBody = '';
				 // request ended -> do something with the data
              res.writeHead(200, "OK", {'Content-Type': 'text/html'});
          
req.on('data', function(chunk) {
      // append the current chunk of data to the fullBody variable
      fullBody += chunk.toString();
  });  
	      req.on('end', function() {	  
		  var decodedBody = querystring.parse(fullBody);
          var post= JSON.stringify(decodedBody);
          post=JSON.parse(post) ;
		
   if(post.btnFuncion.toString()=='Pedir_Datos'){
        
	    res.writeHead(200, {'Content-Type': 'text/html'});
		html  = fs.readFileSync('Guardar.html','utf8');
		res.write(html);
		res.end(); 
	}
	else if(post.btnFuncion.toString()=='Guardar'){
	     
		  console.log('Guardando datos guardar');
	      setNombre= post.txtNombre.toString().substring(0,1).toUpperCase()+ post.txtNombre.substring(1, post.txtNombre.toString().length).toLowerCase();
		  setTipo= post.txtTipo.toString().substring(0,1).toUpperCase()+ post.txtTipo.substring(1, post.txtTipo.toString().length).toLowerCase();
		  setRecurso= post.txtRecurso.toString().substring(0,1).toUpperCase()+ post.txtRecurso.substring(1, post.txtRecurso.toString().length).toLowerCase();
		  setTiempo= post.txtTiempo.toString().substring(0,1).toUpperCase()+ post.txtTiempo.substring(1, post.txtTiempo.toString().length).toLowerCase();
		  setMateria= post.txtMateria.toString().substring(0,1).toUpperCase()+ post.txtMateria.substring(1, post.txtMateria.toString().length).toLowerCase();
          
		  fs.writeFile(File,(setNombre+","+setTipo+","+setRecurso+","+setTiempo+","+setMateria));
		  
		  res.writeHead(200, {'Content-Type': 'text/html'});
		  html  = fs.readFileSync('menuCrud.html','utf8');
		  res.write(html);
		  res.end();
	    
	}
	else if(post.btnFuncion.toString()=='Buscar'){
	  
	       console.log('Buscando Datos');
		   dato = post.txtDato.toString().substring(0,1).toUpperCase()+ post.txtDato.substring(1, post.txtDato.toString().length).toLowerCase();
		   console.log('Buscando Dato servidor: ' + dato);
		   var vuscar= cargarModeloArchivo.BuscarDato(dato);
		   res.write(vuscar.toString());
		  
		   res.end();
	}
	else if(post.btnFuncion.toString()=='Mostrar'){
	       console.log('Mostrando Datos');
	      
		  var cadena = cargarModeloArchivo.Mostrar();
		  res.write(cadena.toString());
		  res.end();
		 
	}
	else if(post.btnFuncion.toString()=='Buscar_Datos'){
	       console.log('Pagina Buscar');
	       res.writeHead(200, {'Content-Type': 'text/html'});
		   html  = fs.readFileSync('BuscarDatos.html','utf8');
		   res.write(html);
		   //leerarchivo.LeerLeer();
		   
		   
		   res.end();
	}
	
	else if(post.btnFuncion.toString()=='Regresar'){
	       console.log('Regresando');
	       res.writeHead(200, {'Content-Type': 'text/html'});
		   html  = fs.readFileSync('menuCrud.html','utf8');
		   res.write(html);
		   res.end();
	}
     else if(post.btnFuncion.toString()=='Modificar'){
	       console.log('Regresando');
	       res.writeHead(200, {'Content-Type': 'text/html'});
		   html  = fs.readFileSync('Guardar.html','utf8');
		   res.write(html);
		   res.end();
	}
	
	 else if(post.btnFuncion.toString()=='Eliminar'){
	       console.log('Eliminando');
	         fs.writeFile(File, "" );
		   res.writeHead(200, {'Content-Type': 'text/html'});
		   html  = fs.readFileSync('menuCrud.html','utf8');
		   res.write(html);
		   res.end();
	}
	  //res.end();
    });

    }else{

    console.log("[405] " + req.method + " to " + req.url);
    res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  }
});
console.log("listen:http://127.0.0.1:3000");
server.listen(3000,'127.0.0.1');