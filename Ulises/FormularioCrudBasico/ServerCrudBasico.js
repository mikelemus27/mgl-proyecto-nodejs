var http = require("http");
var querystring= require("querystring");
var utils= require("util");
var port = 3000;
var serverUrl = "localhost";
var fs= require ("fs");

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
		  
		  
		  
		  
		
		  
		
		  
		  
	var entidadCarrera = function (){
		Nombre=""; 
		Creditos="";
		Clave="";
		Area="";
		Tipo="";
		
	  }
  
	  entidadCarrera.prototype.setNombre = function(Nombre){
	   
		if (typeof Nombre === "undefined"){
		  return this._Nombre ;
		}else{
		  this._Nombre = Nombre;
		}
	  }
	  
	  entidadCarrera.prototype.getNombre = function(){
		  return this._Nombre;
	  }
	  
	  entidadCarrera.prototype.setCreditos = function(Creditos){
	   
		if (typeof Creditos === "undefined"){
		  return this._Creditos ;
		}else{
		  this._Creditos = Creditos;
		}
	  }
	  
	  entidadCarrera.prototype.getCreditos = function(){
		  return this._Creditos;
	  }
	  
	  entidadCarrera.prototype.setClave = function(Clave){
		
		if (typeof Clave === "undefined"){
		  return this._Clave ;
		}else{
		  this._Clave = Clave;
		}
	  }
	  
	  entidadCarrera.prototype.getClave = function(){
		  return this._Clave;
	  }
	  
	  entidadCarrera.prototype.setArea = function(Area){
		if (typeof Area === "undefined"){
		  return this._Area ;
		}else{
		  this._Clave = Area;
		}
	  }
	  
	   entidadCarrera.prototype.getArea = function(){
		  return this._Area;
	  }
	  
	  entidadCarrera.prototype.setTipo = function(Tipo){
		
		if (typeof Tipo === "undefined"){
		  return this._Tipo ;
		}else{
		  this._Tipo = Tipo;
		}
	  }
	  entidadCarrera.prototype.getTipo = function(){
		  return this._Tipo;
	  }
		  

		  
	var claseVista = function(){
   
      }
       var obj = new entidadCarrera();
		  
		  
    claseVista.prototype.Mostrar = function(){
      res.write('<html><head><title>Post data</title></head><body><pre>');
      res.write("Datos en la entidad Carrera");
      res.write("</br>");
	  res.write("</br>");
	  res.write("Nombre Carrera: " + obj.getNombre());
	  res.write("</br>");
	  res.write("No Creditos: "+ obj.getCreditos());
	  res.write("</br>");
	  res.write("Clave: "+ obj.getClave());
	  res.write("</br>");
	  res.write("Area: "+ obj.getArea());
	  res.write("</br>");
	  res.write("Tipo: "+ obj.getTipo());
	  res.write('</pre></body></html>');
  
  }
		  
	claseVista.prototype.Capturar = function(nombre,creditos,clave,area,tipo){
    
	 
	 obj.setNombre(nombre);
	 obj.setCreditos(creditos);
	 obj.setClave(clave);
	 obj.setArea(area);
	 obj.setTipo(tipo);
	 
	 
   
  }
  
  var claseControl = function(){
  
  
  }
		  
	claseControl.prototype.Guardar = function(){
	 var valor=obj.getNombre() +','+ obj.getCreditos() +','+ obj.getClave() + ',' + obj.getArea() + ',' + obj.getTipo();
	  fs.writeFile('./archivo.csv', valor, function(err) {
       if(err) throw err;
       console.log('guardado con exito');
	   
      });
	}	  
		  
        
     // recogemos valores.
		  
		  
	  
	  
	 inicio = function(val,val2,val3,val4,val5){
	 var obcon = new claseControl();
	 var objvis = new claseVista();
	 
	 objvis.Capturar(val,val2,val3,val4,val5);
	 
	  obcon.Guardar();
	  objvis.Mostrar();
	  
	 }
      
      inicio(post.carrera.toString(),post.creditos.toString(),post.clave.toString(),post.area.toString(),post.tipo.toString());
         
         
      
      res.end();
    });  
    
  } else {
    console.log("[405] " + req.method + " to " + req.url);
    res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  }


});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(8888, '127.0.0.1');;