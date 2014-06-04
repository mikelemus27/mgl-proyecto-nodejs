var http = require('http');
var url = require ("url");
var querystring= require("querystring");
var fs= require ("fs");


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
		  
//Clases del crud		  
 
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
  
  Vista.prototype.cargarARCHIVO = function(){
  
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
					datos.setClave(valCVE);
					}
					else if(j===1){
					var valNBR=txtLINEA[j];
					datos.setNombre(valNBR);
					}
					else if(j===2){
					var valMOD=txtLINEA[j];
					datos.setModulos(valMOD);
					}
					else if(j===3){
					var valCRE=txtLINEA[j];
					datos.setCreditos(valCRE);
					}
					else if(j===4){
					var valPER=txtLINEA[j];
					datos.setPeriodo(valPER);
					}
					
				}
		
		  
		  }
		 
  }
  
  Vista.prototype.Mostrar = function (){
     //Vista.prototype.cargarARCHIVO();
               
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
			   res.write("<br>");
			   res.write("<FORM method=post action="+"'"+"http://127.0.0.1:8888/servidor.js"+"'"+">");
               res.write("<INPUT name="+"'"+"btnINDICADOR"+"'"+" type="+"'"+"submit"+"'"+"value="+"'"+"Terminado"+"'"+" />");
			   res.write("</FORM>");
			   
			   res.write("</body>");
			   res.write("</html>");

  
  }
  
  Vista.prototype.Capturar = function(valClave,valNombre,valModulos,valCreditos,valPeriodo){
  
  datos.setClave(valClave);
  datos.setNombre(valNombre);
  datos.setModulos(valModulos);
  datos.setCreditos(valCreditos);
  datos.setPeriodo(valPeriodo);
  
  var valor= Vista.prototype.Cadena();
	  fs.writeFile("c:/archivo.csv", valor);

}

  Vista.prototype.Editar = function(){
     Vista.prototype.cargarARCHIVO();
	 res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(
	'<FORM method=post action="http://127.0.0.1:8888/servidor.js">'+
	'<INPUT type=text name="txtCLAVE" value="'+datos.getClave()+'"/>'+
	'<INPUT type=text name="txtNOMBRE" value="'+datos.getNombre()+'"/>'+
	'<INPUT type=text name="txtMODULOS" value="'+datos.getModulos()+'"/>'+
	'<INPUT type=text name="txtCREDITOS" value="'+datos.getCreditos()+'"/>'+
	'<INPUT type=text name="txtPERIODO" value="'+datos.getPeriodo()+'"/>'+
	'<INPUT name="btnINDICADOR" type="submit" value="Guardar" />'+
    '</FORM>'
	);  
  }

  Vista.prototype.Cadena = function(){
   var x=datos.getClave()+","+datos.getNombre()+","+datos.getModulos()+","+datos.getCreditos()+","+datos.getPeriodo();
   return x;
  }
  
  Vista.prototype.Busqueda= function(valA,valB){
    Vista.prototype.cargarARCHIVO();
	var texto="";
    if(valA==="1"){
	 if(valB===datos.getClave()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	else if(valA==="2"){
	 if(valB===datos.getNombre()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	else if(valA==="3"){
	 if(valB===datos.getModulos()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	else if(valA==="4"){
	 if(valB===datos.getCreditos()){
	 texto="Si se encontro";
	 }
	 else{
	texto="No se encontro";
	 }
	}
	else if(valA==="5"){ 
	if(valB===datos.getPeriodo()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	
	res.write(
	'<html>'+
	texto+
	'<br>'+
	'<form method=post action="http://127.0.0.1:8888/servidor.js">'+
	'<INPUT name="btnINDICADOR" type="submit" value="Terminado" />'+
	'</form>'+
	'</html>'
	);
	
  }
  Entidad.Vista = Vista;
})(); 


var inicio = new Entidad.Vista();
  

	
	res.end();
		});
		
		
}

}).listen(8888,'127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');