var fs= require ("fs");
var entCarrera = require ("./EntCarrera.js");
var objCarrera = new entCarrera();
var array = require ("./ArregloCarrera.js");
var objArray = new array();
var bandera = "1";
var elemento = {};
var pos = "-1";

	var VistaControlCarrera = function(){
          if(bandera=="1"){
		     VistaControlCarrera.prototype.loadArray();
			 bandera = "0";
		  }
      }
	  
	  
	  VistaControlCarrera.prototype.saveCambios = function(){
	
		var container = fs.createWriteStream("archivo.csv");
 
		container.once('open', function(func) {
			
			for(var i=0; i < objArray.getObjArray().length; i++){
			
				if(objArray.getObjArray().length-1== i ){
				 container.write(objArray.getObjArray()[i]["Nombre"]+','+
						 objArray.getObjArray()[i]["Creditos"]+','+
						 objArray.getObjArray()[i]["Clave"]+','+
						 objArray.getObjArray()[i]["Area"]+','+
						 objArray.getObjArray()[i]["Tipo"]+'\r');
				}
				else{
				
				container.write(objArray.getObjArray()[i]["Nombre"]+','+
						 objArray.getObjArray()[i]["Creditos"]+','+
						 objArray.getObjArray()[i]["Clave"]+','+
						 objArray.getObjArray()[i]["Area"]+','+
						 objArray.getObjArray()[i]["Tipo"]+'\n');
				}
			}
	 
	
      container.end();
		});
		
		return JSON.stringify(objArray.getObjArray());
  } 
       
	   
	   VistaControlCarrera.prototype.loadArray = function(){
  
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
				
		     elemento["Nombre"] = objCarrera.getNombre();
			 elemento["Creditos"] = objCarrera.getCreditos();
			 elemento["Clave"] = objCarrera.getClave();
			 elemento["Area"] = objCarrera.getArea();
			 elemento["Tipo"] = objCarrera.getTipo();

			 var R=JSON.stringify([elemento]);
  
			 objArray.setObjArray(eval(R)); 
		  
		  }
		 
  }	  
		  
		  
    VistaControlCarrera.prototype.Mostrar = function(){
	
		return JSON.stringify(objArray.getObjArray());
  }
		  
	VistaControlCarrera.prototype.Capturar = function(nombre,creditos,clave,area,tipo){
    
	 
	 objCarrera.setNombre(nombre);
	 objCarrera.setCreditos(creditos);
	 objCarrera.setClave(clave);
	 objCarrera.setArea(area);
	 objCarrera.setTipo(tipo);
	 
	 
	 elemento["Nombre"] = objCarrera.getNombre();
	 elemento["Creditos"] = objCarrera.getCreditos();
	 elemento["Clave"] = objCarrera.getClave();
	 elemento["Area"] = objCarrera.getArea();
	 elemento["Tipo"] = objCarrera.getTipo();

	var R=JSON.stringify([elemento]);
  
	objArray.setObjArray(eval(R)); 
	 
	 return JSON.stringify(objArray.getObjArray());
   
  }
  
  // var claseControl = function(){
  
  // }
		  
	// VistaControlCarrera.prototype.Guardar = function(){
	 // var valor=objCarrera.getNombre() +','+ objCarrera.getCreditos() +','+ objCarrera.getClave() + ',' + objCarrera.getArea() + ',' + objCarrera.getTipo();
	  // fs.writeFile('./archivo.csv', valor, function(err) {
       // if(err) throw err;
       // console.log('guardado con exito');
	   
      // });
	// }	  
		  
      VistaControlCarrera.prototype.Modificar = function(val1,val2,val3,val4,val5){
	  
	  objArray.Update(val1,val2,val3,val4,val5,pos); 
	  
	  return JSON.stringify(objArray.getObjArray());
	  
	  }  
	  
	  VistaControlCarrera.prototype.Eliminar = function(val){
	       objArray.Delete(val);
		   
		   return JSON.stringify(objArray.getObjArray());
	  
	  
	  }
    	  
		  
		VistaControlCarrera.prototype.Busqueda= function(data){
		  var mensaje="null";
			for(var i=0; i < objArray.getObjArray().length; i++){
				//console.log(objArray.getObjArray()[i][valA]+ valB);
					if(objArray.getObjArray()[i] == data){
						mensaje="Si se encontro";
						break;
					}
					else{
						mensaje="no se encontro";
					}
			}
	 	
			return mensaje;
		  }
		  
		  VistaControlCarrera.prototype.valPos= function (val){
			pos=val;
		}
	  
	  
    
  
module.exports.VistaControlCarrera = VistaControlCarrera;

