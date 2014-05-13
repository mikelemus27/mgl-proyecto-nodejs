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

    var fullBody = '';
    
    req.on('data', function(chunk) {
     
      fullBody += chunk.toString();
    });
	
	req.on('end', function() {
	  
	  var decodedBody = querystring.parse(fullBody);
      var post= JSON.stringify(decodedBody);
          post=JSON.parse(post) ;

          
		  
		 
var Entidad = Entidad || {}; 
;(function(){
  
  function Reticula(Clave,Nombre,Modulos,Creditos,Periodo){
    this._Clave = Clave; 
	this._Nombre= Nombre;
	this._Modulos= Modulos;
	this._Creditos= Creditos;
	this._Periodo= Periodo;
  }
  
  Reticula.prototype.setClave = function(Clave){
  
    if (typeof Clave === "undefined"){
      return this._Clave ;
    }else{
      this._Clave = Clave;
    }
  }
  
  
  Reticula.prototype.getClave = function(){
  
  return this._Clave;
  
  }
  
  
  Reticula.prototype.setNombre = function(Nombre){
  
    if (typeof Nombre === "undefined"){
      return this._Nombre;
    }else{
      this._Nombre = Nombre;
    }
  }
  
  
  Reticula.prototype.getNombre = function(){
	
	 return this._Nombre;
	}
  
    Reticula.prototype.setModulos = function(Modulos){
  
    if (typeof Modulos === "undefined"){
      return this._Modulos;
    }else{
      this._Modulos = Modulos;
    }
  }
  
    Reticula.prototype.getModulos = function(){
	return this._Modulos;
	}
    
	
	Reticula.prototype.setCreditos = function(Creditos){
  
    if (typeof Creditos === "undefined"){
      return this._Creditos;
    }else{
      this._Creditos = Creditos;
    }
  }
  
    Reticula.prototype.getCreditos = function(){
	return this._Creditos;
	}
	
	
	
	  Reticula.prototype.setPeriodo = function(Periodo){
  
    if (typeof Periodo === "undefined"){
      return this._Periodo;
    }else{
      this._Periodo = Periodo;
    }
  }
  
    Reticula.prototype.getPeriodo = function(){
	return this._Periodo;
	}
  
  
  Entidad.Reticula = Reticula;
})();  
;(function(){

  var datos=new Entidad.Reticula();
  
  function Vista(){
 
  }
  
  
  Vista.prototype.Mostrar = function (){
   
   
               res.write("<html>");
			   res.write("<body bgcolor='orange'>");
			   res.write("Clave: "+datos.getClave());
			   res.write("<br>");
			   res.write("Nombre: "+datos.getNombre());
			   res.write("<br>");
			   res.write("Modulos: "+datos.getModulos());
			   res.write("<br>");
			   res.write("Creditos: "+datos.getCreditos());
			   res.write("<br>");
			   res.write("Periodo: "+datos.getPeriodo());
			   res.write("</body>");
			   res.write("</html>");
  
  
  }
  
  Vista.prototype.Capturar = function(valClave,valNombre,valModulos,valCreditos,valPeriodo){
  
  datos.setClave(valClave);
  datos.setNombre(valNombre);
  datos.setModulos(valModulos);
  datos.setCreditos(valCreditos);
  datos.setPeriodo(valPeriodo);

}

  Vista.prototype.Cadena = function(){
   var x=datos.getClave()+","+datos.getNombre()+","+datos.getModulos()+","+datos.getCreditos()+","+datos.getPeriodo();
   return x;
  }
 Entidad.Vista = Vista;
})(); 
;(function(){

 var fs  = require("fs");
 var op = new Entidad.Vista();


   function Control(){
    
    
   }
   
   Control.prototype.getop= function(){
    return op;
 }

   Control.prototype.Guardar = function(callback){
     
	  var valor= op.Cadena();
	  fs.writeFile("c:/archivo.csv", valor);
	  console.log("Se guardo exitosamente...");
	  callback();
	 }


   Entidad.Control = Control;
  
})(); 

iniciar = function(a,b,c,d,e){
     var inicio = new Entidad.Control();
	 op= inicio.getop();
	 
     op.Capturar(a,b,c,d,e);
	 
	 inicio.Guardar(function (){
	 op.Mostrar();
	 });
	 
	}   

iniciar(post.txtCLAVE.toString(),post.txtNOMBRE.toString(),post.txtMODULOS.toString(),post.txtCREDITOS.toString(),post.txtPERIODO.toString());		  
		  
			
		  
			
	res.end();
		});
		
		
}
  

 
}).listen(8888,'127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');