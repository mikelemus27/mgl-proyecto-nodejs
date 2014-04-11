     var http = require("http");
     var querystring= require("querystring");
     var utils= require("util");
     var fs = require('fs');
     var File= "archivo.txt";
     var server = http.createServer(function(req, res) 
	 
{
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
	      
		  //recojemos los datos de la vista
		  //llenamos el modelo con los metodos set-----------------------
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
		  
		  cargar.CargarCargar();
     
	  //res.end();
    });

    }else{
	
    console.log("[405] " + req.method + " to " + req.url);
    res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  }
  
  
	 // -------------------------------------------------------------------
	 var modulocargar = modulocargar || {};//nombre del namespace
     var moduloleer = moduloleer || {};//nombre del namespace
	 var modulomostrar = modulomostrar || {};//nombre del namespace
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
   }
 
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
  
 

 //---------------------------------clase para cargar el archivo---------------	
       
;(function(){	//funcion cargar modelo-----------------------

function cargarModeloArchivo(){
     
}
cargarModeloArchivo.prototype.CargarCargar = function(){
		
 //se carga el archivo con los datos		  
	      fs.writeFile(File, (actividades1.getNombreAct()+","+actividades1.getTipo()+","
                       +actividades1.getRecurso()+","+actividades1.getTiempo()+","+actividades1.getMateria()));
                            
							leerarchivo.LeerLeer();
    }
  
     // mymodule namespace
       modulocargar.cargarModeloArchivo = cargarModeloArchivo;
})()//fin de clase cargar 
  var cargar = new modulocargar.cargarModeloArchivo();   
	 
	 
	 
//------------------------leemos el archivo y mandamos los datos al modelo---------------------------------------------------------

;(function(){

function leerModeloArchivo(){
     
	 }
	 
leerModeloArchivo.prototype.LeerLeer = function(){

         fs.readFile(File, function(error, data) {
             if (error)
                 throw error;
		   
		        var str = data.toString();
                arr1 = str.split("\n");
	            for(var i=0;i<arr1.length;i++) {
                    var nuevodato = arr1[i];
                    var arr2 = nuevodato.split(","); 
	                    for(var a=0;a<arr2.length;a++) {
					 
		                       if(a==0){
							   var nombre=arr2[a];
							   actividades1.setNombreAct(nombre);
							   }
							   if(a==1){
							   var tipo=arr2[a];
							   actividades1.setTipo(tipo);
							   }
							   if(a==2){
							   var recurso=arr2[a];
							   actividades1.setRecurso(recurso);
							   }
							   if(a==3){
							   var tiempo=arr2[a];
							   actividades1.setTiempo(tiempo);
							   }
							   if(a==4){
							   var materia=arr2[a];
							   actividades1.setMateria(materia);
							   }
							}
	                  }

                      mostrar.mostrar();
                 });

          }
     moduloleer.leerModeloArchivo = leerModeloArchivo;
})()//fin de leer el archivo
	
	
	var leerarchivo = new moduloleer.leerModeloArchivo();	 
	 
//----------------------mandamos los datos del modelo a la vista--------------------------------------------------------

;(function(){

function mostrardatos(){
     
	 }
	
mostrardatos.prototype.mostrar = function(){	

	// salida de datos con la respuesta HTTP response          
          res.write('<html><head><title>Pagina Post</title></head><body><pre>');
          res.write("CRUD BASICO");
		  res.write("</br>");
		  res.write("Entidad Actividades Didacticas");
		  
          res.write("</br>");
		  Anombre=actividades1.getNombreAct();
		  res.write("Ac Nombre:  ");
		  res.write(Anombre);
		 
		  res.write("</br>");
          Atipo=actividades1.getTipo();
		  res.write("Ac Tipo:  ");
          res.write(Atipo);
		  
		  res.write("</br>");
          Arecurso=actividades1.getRecurso();
		  res.write("Ac Recurso:  ");
          res.write(Arecurso);
		  
		  res.write("</br>");
          Atiempo=actividades1.getTiempo();
		  res.write("Ac Tiempo:  ");
          res.write(Atiempo);
		  
		  res.write("</br>");
          Amateria=actividades1.getMateria();
		  res.write("Ac Materia:  ");
          res.write(Amateria);
	     
          res.write("</br>");
		  res.write("Direccion: http://127.0.0.1 Puerto: 3000");
		  res.write("</br>");
          res.write('</pre></body></html>');

          res.end();
	
	 }
	 modulomostrar.mostrardatos = mostrardatos;
	})()//fin de leer el archivo
	
	var mostrar = new modulomostrar.mostrardatos();

});
console.log("listen:http://127.0.0.1:3000");
server.listen(3000,'127.0.0.1');