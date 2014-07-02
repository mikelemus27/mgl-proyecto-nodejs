var fs= require ("fs");
var entgrupo = require ("./Entgrupo.js");
var objgrupo = new entgrupo();
var array = require ("./Arreglogrupo.js");
var objArray = new array();
var bandera = "1";
var elemento = {};
var pos = "-1";

	var VistaControlgrupo = function(){
          if(bandera=="1"){
		     VistaControlgrupo.prototype.loadArray();
			 bandera = "0";
		  }
      }
	  
	  
	  VistaControlgrupo.prototype.saveCambios = function(){
	
		var container = fs.createWriteStream("archivo.csv");
 
		container.once('open', function(func) {
			
			for(var i=0; i < objArray.getObjArray().length; i++){
			
				if(objArray.getObjArray().length-1== i ){
				 container.write(objArray.getObjArray()[i]["grupo"]+','+
						 objArray.getObjArray()[i]["numero"]+','+
						 objArray.getObjArray()[i]["nombre"]+','+
						 objArray.getObjArray()[i]["actividad"]+','+
						 objArray.getObjArray()[i]["ubicacion"]+'\r');
				}
				else{
				
				container.write(objArray.getObjArray()[i]["grupo"]+','+
						 objArray.getObjArray()[i]["numero"]+','+
						 objArray.getObjArray()[i]["nombre"]+','+
						 objArray.getObjArray()[i]["actividad"]+','+
						 objArray.getObjArray()[i]["ubicacion"]+'\n');
				}
			}
	 
	
      container.end();
		});
  } 
       
	   
	   VistaControlgrupo.prototype.loadArray = function(){
  
		var Nolinea = fs.readFileSync('./archivo.csv').toString().split('\n').length;
      
		  for(var x=0;  x < linea ; x++){
		    
		    var arreglo = fs.readFileSync('./archivo.csv').toString().split('\n');
			var linea=arreglo[x].split(',');
			
			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var a=0; j<5; j++){
			     	

					
					if(a===0){
					var valgrupo=linea[a];
					objgrupo.setgrupo(valgrupo);
					}
					else if(a===1){
					var valCred=linea[a];
					objgrupo.setnumero(valnumero);
					}
					else if(a===2){
					var valnombre=linea[a];
					objgrupo.setnombre(valnombre);
					}
					else if(a===3){
					var valactividad=linea[a];
					objgrupo.setactividad(valactividad);
					}
					else if(a===4){
					var valubicacion=linea[j];
					objgrupo.setubicacion(valubicacion);
					}
					
				}
				
		     elemento["grupo"] = objgrupo.getgrupo();
			 elemento["numero"] = objgrupo.getnumero();
			 elemento["nombre"] = objgrupo.getnombre();
			 elemento["actividad"] = objgrupo.getactividad();
			 elemento["ubicacion"] = objgrupo.getubicacion();

			 var R=JSON.stringify([elemento]);
  
			 objArray.setObjArray(eval(R)); 
		  
		  }
		 
  }	  
		  
		  
    VistaControlgrupo.prototype.Mostrar = function(){
	
	 
	 var contenido = ["<tr><th>grupo</th><th>numero</th><th>nombre</th><th>actividad</th><th>ubicacion</th></tr>" ];
      
	 for(var i=0; i< objArray.getObjArray().length; i++){ 
	  
	  contenido.push('<tr>'+
					 '<td>'+objArray.getObjArray()[i]["grupo"]+'</td>'+
	                 '<td>'+objArray.getObjArray()[i]["numero"]+'</td>'+
					 '<td>'+objArray.getObjArray()[i]["nombre"]+'</td>'+
					 '<td>'+objArray.getObjArray()[i]["actividad"]+'</td>'+
					 '<td>'+objArray.getObjArray()[i]["ubicacion"]+'</td>'+
					 '<td align="center" ><input type="radio" name="radios" value="'+i+'" /></td>'+
					 '</tr>');
	 }
	 var cadTexto='<html>'+'<form action="./edit.jssp"><table border="1">'+
				contenido.join(" ")+'</table>'+
				'<INPUT name="button" type="submit" value="Salir" />'+
		        '<INPUT name="button" type="submit" value="Editar" />'+
		        '<INPUT name="button" type="submit" value="Eliminar" />'+
				'<INPUT name="button" type="submit" value="Guardar en Archivo" />'+
				'</form></html>';
     return cadTexto;
  
  }
		  
	VistaControlgrupo.prototype.Capturar = function(grupo,numero,nombre,actividad,ubicacion){
    
	 
	 objgrupo.setgrupo(grupo);
	 objgrupo.setnumero(numero);
	 objgrupo.setnombre(nombre);
	 objgrupo.setactividad(actividad);
	 objgrupo.setubicacion(ubicacion);
	 
	 
	 elemento["grupo"] = objgrupo.getgrupo();
	 elemento["numero"] = objgrupo.getnumero();
	 elemento["nombre"] = objgrupo.getnombre();
	 elemento["actividad"] = objgrupo.getactividad();
	 elemento["ubicacion"] = objgrupo.getubicacion();

	var R=JSON.stringify([elemento]);
  
	objArray.setObjArray(eval(R)); 
	 
  
  }
  
  
      VistaControlgrupo.prototype.Modificar = function(val1,val2,val3,val4,val5){
	  
	  objArray.Update(val1,val2,val3,val4,val5,pos); 
	  
	  }  
	  
	  VistaControlgrupo.prototype.Eliminar = function(val){
	       objArray.Delete(val);
	  
	  
	  }
    	  
		  
		VistaControlgrupo.prototype.Busqueda= function(data){
		  var mensaje="null";
			for(var i=0; i < objArray.getObjArray().length; i++){
				
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
		  
		  VistaControlgrupo.prototype.valPos= function (val){
			pos=val;
		}
	  
	  
    
  
module.exports.VistaControlgrupo = VistaControlgrupo;

