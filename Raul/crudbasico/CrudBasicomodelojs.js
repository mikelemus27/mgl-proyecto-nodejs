var http = require("http");
var querystring= require("querystring");
var utils= require("util");

var server = http.createServer(function(req, res) 
{
     console.log("Request: " + req.url);
	 
	 //Clase Modelo -------------------------------------------------------------------

var mymodule = mymodule || {};//nombre del namespace
;(function(){
  
  // Constructor
  function ActividadesDidacticas( nombre, tipo, recurso, tiempo, materia){
    this._nombre = nombre; // as convention, ._*** is for privates properties
    this._tipo = tipo;
	this._recurso = recurso;
	this._tiempo = tiempo;
	this._maateria = materia;
  }
  
  
  // A ObjectType Method
  ActividadesDidacticas.prototype.setNombreAct = function(nombre){
    
      this._nombre = nombre;
  }

      ActividadesDidacticas.prototype.getNombreAct = function (){
      return this._nombre;
      }  
   
  ActividadesDidacticas.prototype.setTipo = function(tipo){
    
	this._tipo = tipo;
   }//fin de prototype tipo
 
  ActividadesDidacticas.prototype.getTipo = function(){
  return this._tipo;
  }

  ActividadesDidacticas.prototype.setRecurso = function(recurso){
    
      this._recurso = recurso;
   }//fin de prototype tipo
 
  ActividadesDidacticas.prototype.getRecurso = function(){
  return this._recurso;
  }
  
  ActividadesDidacticas.prototype.setTiempo = function(tiempo){
    
      this._tiempo = tiempo;
   }
 
  ActividadesDidacticas.prototype.getTiempo = function(){
  return this._tiempo;
  }
  
  ActividadesDidacticas.prototype.setMateria = function(materia){
    
      this._materia = materia;
     }
 
     ActividadesDidacticas.prototype.getMateria = function(){
    return this._materia;
    }
	
  // mymodule namespace
  mymodule.ActividadesDidacticas = ActividadesDidacticas;
  
})(); 

var actividades1 = new mymodule.ActividadesDidacticas(); 
  
     if (req.method == 'POST') {
      
	 console.log("[200] " + req.method + " to " + req.url);

				var fullBody = '';
				 // request ended -> do something with the data
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
           // parse the received body data
      
    
    req.on('data', function(chunk) {
      // append the current chunk of data to the fullBody variable
      fullBody += chunk.toString();
    });  
    
    req.on('end', function() {
    
     var decodedBody = querystring.parse(fullBody);
      var post= JSON.stringify(decodedBody);
          post=JSON.parse(post) ;
		  
		  //llenamos el modelo-----------------------
		  setNombre= post.txtNombre;
		  setTipo= post.txtTipo;
		  setRecurso= post.txtRecurso;
		  setTiempo= post.txtTiempo;
		  setMateria= post.txtMateria;
		  
		  actividades1.setNombreAct(setNombre);
		  actividades1.setTipo(setTipo);
		  actividades1.setRecurso(setRecurso);
		  actividades1.setTiempo(setTiempo);
		  actividades1.setMateria(setMateria);
     
		  //fin del Modelo-------------------------
		  
      // salida de datos con la respuesta HTTP response          
          res.write('<html><head><title>Pagina Post</title></head><body><pre>');
          res.write("CRUD BASICO");
		  res.write("</br>");
		  res.write("Entidad Actividades Didacticas");
		  
		   res.write('<FORM enctype="application/x-www-form-urlencoded" ACTION="http://localhost:3000/index.js" METHOD="POST">') 
		   
	
		  res.write("</br>");
		  res.write(" <INPUT TYPE='submit' VALUE='Mostrar'>");
		  res.write(' </FORM>');
		  
		  
          res.write("</br>");
		  nombre=actividades1.getNombreAct();
		  res.write("Ac Nombre:  ");
		  res.write(nombre);
		 
		  res.write("</br>");
          tipo=actividades1.getTipo();
		  res.write("Ac Tipo:  ");
          res.write(tipo);
		  
		  res.write("</br>");
          recurso=actividades1.getRecurso();
		  res.write("Ac Recurso:  ");
          res.write(recurso);
		  
		  res.write("</br>");
          tiempo=actividades1.getTiempo();
		  res.write("Ac Tiempo:  ");
          res.write(tiempo);
		  
		  res.write("</br>");
          materia=actividades1.getMateria();
		  res.write("Ac Materia:  ");
          res.write(materia);
	     
          res.write("</br>");
		  res.write("Direccion: http://127.0.0.1 Puerto: 3000");
		  res.write("</br>");
          res.write('</pre></body></html>');
      
      res.end();
    });
    }else{
	
	
    console.log("[405] " + req.method + " to " + req.url);
    res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  }
  
 // res.end(html);

});
console.log("listen:http://127.0.0.1:3000");
server.listen(3000,'127.0.0.1');