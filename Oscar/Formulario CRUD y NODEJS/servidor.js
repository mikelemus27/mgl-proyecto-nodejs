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
   
   console.log("\nMostrando... \n");
   console.log("Clave: "+datos.getClave());
   console.log("Nombre: "+datos.getNombre());
   console.log("Modulos: "+datos.getModulos());
   console.log("Creditos: "+datos.getCreditos());
   console.log("Periodo: "+datos.getPeriodo());

  
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
 
 
   Control.prototype.Cargar =function(){
   

   //COMIENZA EL PROCESO DE CARGAR EL ARCHIVO

		var numLINEAS = fs.readFileSync('c:/archivo.csv').toString().split('\n').length;
          //ciclo para leer linea individualmente
		  for(var x=0;  x < numLINEAS ; x++){
		    console.log("\nEn la linea " + (x+1)+ " del archivo se encuentra");
		    var array = fs.readFileSync('c:/archivo.csv').toString().split('\n');
			var txtLINEA=array[x].split(',');
			
			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var j=0; j<5; j++){
			     	

					
					if(j===0){
					var valCVE=txtLINEA[j];
					console.log("Clave: "+valCVE);
					}
					else if(j===1){
					var valNBR=txtLINEA[j];
					console.log("Nombre: "+valNBR);
					}
					else if(j===2){
					var valMOD=txtLINEA[j];
					console.log("Modulos: "+valMOD);
					}
					else if(j===3){
					var valCRE=txtLINEA[j];
					console.log("Creditos: "+valCRE);
					}
					else if(j===4){
					var valPER=txtLINEA[j];
					console.log("Periodo: "+valPER);
					}
					
				}
		 
			   res.write("<html>");
			   res.write("<body bgcolor='navy'>");
			   res.write(valCVE.toString());
			   res.write("</body>");
			   res.write("</html>");
		
		  }
		  
		  console.log("\n");
	
		
		
	//Termina el proceso de cargar el archivo
   
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
	 inicio.Cargar();
	 });
	 
	}   

iniciar(post.txtCLAVE.toString(),post.txtNOMBRE.toString(),post.txtMODULOS.toString(),post.txtCREDITOS.toString(),post.txtPERIODO.toString());		  
		  
			
		  
			
	res.end();
		});
		
		
}
  

 
}).listen(8888,'127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');