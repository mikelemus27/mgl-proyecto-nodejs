var fs= require ("fs");
var entCarrera = require ("./EntCarrera.js");
var objCarrera = new entCarrera();


	var VistaControlCarrera = function(){
   
      }
       
	   
	   VistaControlCarrera.prototype.loadFile = function(){
  
		var Nolinea = fs.readFileSync('./archivo.csv').toString().split('\n').length;
      
		  for(var x=0;  x < linea ; x++){
		    
		    var arreglo = fs.readFileSync('./archivo.csv').toString().split('\n');
			var linea=arreglo[x].split(',');
			
			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var a=0; j<5; j++){
			     	

					
					if(a===0){
					var valNombre=linea[a];
					objCarrera.setNombre(valNombre);
					}
					else if(a===1){
					var valCred=linea[a];
					objCarrera.setCreditos(valCred);
					}
					else if(a===2){
					var valClave=linea[a];
					objCarrera.setClave(valClave);
					}
					else if(a===3){
					var valArea=linea[a];
					objCarrera.setArea(valArea);
					}
					else if(a===4){
					var valTipo=linea[j];
					objCarrera.setTipo(valTipo);
					}
					
				}
		
		  
		  }
		 
  }	  
		  
		  
    VistaControlCarrera.prototype.Mostrar = function(){
	VistaControlCarrera.prototype.loadFile();
	var cadTexto='<html>'+
	 '<FORM method=post action="http://127.0.0.1:8888/ServerCrudBasico.js">'+
	'Nombre Carrera: <label>'+objCarrera.getNombre()+'</label> <br/>'+
	'No Creditos: <label>'+objCarrera.getCreditos()+'</label> <br/>'+
	'Clave : <label>'+objCarrera.getClave()+'</label> <br/>'+
	'Area: <label>'+objCarrera.getArea()+'</label> <br/>'+
	'Tipo: <label>'+objCarrera.getTipo()+'</label> <br/>'+
	'<INPUT name="button" type="submit" value="Regresar" />'+
    '</FORM>'+'</html>';		
     return cadTexto;
  
  }
		  
	VistaControlCarrera.prototype.Capturar = function(nombre,creditos,clave,area,tipo){
    
	 
	 objCarrera.setNombre(nombre);
	 objCarrera.setCreditos(creditos);
	 objCarrera.setClave(clave);
	 objCarrera.setArea(area);
	 objCarrera.setTipo(tipo);
	 
	 VistaControlCarrera.prototype.Guardar();
   
  }
  
  // var claseControl = function(){
  
  // }
		  
	VistaControlCarrera.prototype.Guardar = function(){
	 var valor=objCarrera.getNombre() +','+ objCarrera.getCreditos() +','+ objCarrera.getClave() + ',' + objCarrera.getArea() + ',' + objCarrera.getTipo();
	  fs.writeFile('./archivo.csv', valor, function(err) {
       if(err) throw err;
       console.log('guardado con exito');
	   
      });
	}	  
		  
      VistaControlCarrera.prototype.Modificar = function(){
	  
	  VistaControlCarrera.prototype.loadFile();
	  var cadena ='<html>'+
	'<FORM method=post action="http://127.0.0.1:8888/ServerCrudBasico.js">'+
	'FORM DE EDICION<br/>Nombre de la Carrera :<INPUT type=text name="carrera" value="'+objCarrera.getNombre()+'"/>'+
	'<br/>Numero de Creditos :<INPUT type=text name="creditos" value="'+objCarrera.getCreditos()+'"/>'+
	'<br/>Clave :<INPUT type=text name="clave" value="'+objCarrera.getClave()+'"/>'+
	'<br/>Area :<INPUT type=text name="area" value="'+objCarrera.getArea()+'"/>'+
	'<br/>Tipo :<INPUT type=text name="tipo" value="'+objCarrera.getTipo()+'"/>'+
	'<br/><INPUT name="button" type="submit" value="Guardar" />'+
	'<INPUT name="button" type="submit" value="Regresar"/>'+
    '</FORM>'+'</html>';  
	return cadena;
	  
	  }  
    	  
		  
		VistaControlCarrera.prototype.Busqueda= function(data){
		  
			VistaControlCarrera.prototype.loadFile();
			
			var mensaje="";
			
			if(data==objCarrera.getNombre()){
			 mensaje="Si se encontro...";
			}else{
			if(data==objCarrera.getCreditos()){
			mensaje="Si se encontro...";
			
			}else{
			if(data==objCarrera.getClave()){
			 mensaje="Si se encontro";
			}else{
			if(data==objCarrera.getArea()){
			 mensaje="Si se encontro...";
			}else{
			if(data==objCarrera.getTipo()){
			 mensaje="Si se encontro";
			}else{
			 if(data!=objCarrera.getNombre() && data!=objCarrera.getCreditos() && data!=objCarrera.getClave() && data!=objCarrera.getArea() && data!=objCarrera.getTipo()){
				mensaje="No se encontro";
			 }
			}
			}
			}
			
			}
			}
		  
		  return mensaje;
		  }
		  
	  
	  
    
  
module.exports = VistaControlCarrera;

