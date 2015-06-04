  var fs= require ("fs");
  var entidad = require ("./Entidad.js");
  var datos = new entidad();
  
  var arreglo= require ("./Array.js");
  var objarray= new arreglo();
  
  var flag="1";
  var dato = {};
  var posicion="-1";
  
 var Vista = function (){
 if(flag=="1"){
   Vista.prototype.CargarArreglo();
   flag="0";
  }
 
 }
 
  Vista.prototype.GuardarCambio = function(){
	
 var contenedor = fs.createWriteStream("archivo.csv");
 
	 contenedor.once('open', function(fd) {
			
			for(var i=0; i < objarray.getobjARREGLO().length; i++){
			
				if(objarray.getobjARREGLO().length-1== i ){
				 contenedor.write(objarray.getobjARREGLO()[i]["Clave"]+','+
						 objarray.getobjARREGLO()[i]["Nombre"]+','+
						 objarray.getobjARREGLO()[i]["Modulos"]+','+
						 objarray.getobjARREGLO()[i]["Creditos"]+','+
						 objarray.getobjARREGLO()[i]["Periodo"]+'\r');
				}
				else{
				
				contenedor.write(objarray.getobjARREGLO()[i]["Clave"]+','+
						 objarray.getobjARREGLO()[i]["Nombre"]+','+
						 objarray.getobjARREGLO()[i]["Modulos"]+','+
						 objarray.getobjARREGLO()[i]["Creditos"]+','+
						 objarray.getobjARREGLO()[i]["Periodo"]+'\n');
				}
			}
	 
	
      contenedor.end();
		});
  } 
  
  Vista.prototype.Mostrar = function (){

	 var contenido = ["<tr><th>Clave</th><th>Nombre</th><th>Modulos</th><th>Creditos</th><th>Periodo</th></tr>" ];
      
	 for(var i=0; i< objarray.getobjARREGLO().length; i++){ 
	  
	  contenido.push('<tr>'+
					 '<td>'+objarray.getobjARREGLO()[i]["Clave"]+'</td>'+
	                 '<td>'+objarray.getobjARREGLO()[i]["Nombre"]+'</td>'+
					 '<td>'+objarray.getobjARREGLO()[i]["Modulos"]+'</td>'+
					 '<td>'+objarray.getobjARREGLO()[i]["Creditos"]+'</td>'+
					 '<td>'+objarray.getobjARREGLO()[i]["Periodo"]+'</td>'+
					 '<td align="center" ><input type="radio" name="radios" value="'+i+'" /></td>'+
					 '</tr>');
	 }
	 var cadena='<html>'+'<form action="./Edicion.jssp"><table border="1">'+
				contenido.join(" ")+'</table>'+
				'<INPUT name="btnINDICADOR" type="submit" value="Salir" />'+
		        '<INPUT name="btnINDICADOR" type="submit" value="Editar" />'+
		        '<INPUT name="btnINDICADOR" type="submit" value="Eliminar" />'+
				'<INPUT name="btnINDICADOR" type="submit" value="Guardar en Archivo" />'+
				'</form></html>';
     return cadena;

  }
  
  Vista.prototype.Capturar = function(valClave,valNombre,valModulos,valCreditos,valPeriodo){
  
  datos.setClave(valClave);
  datos.setNombre(valNombre);
  datos.setModulos(valModulos);
  datos.setCreditos(valCreditos);
  datos.setPeriodo(valPeriodo);
  
  dato["Clave"] = datos.getClave();
  dato["Nombre"] = datos.getNombre();
  dato["Modulos"] = datos.getModulos();
  dato["Creditos"] = datos.getCreditos();
  dato["Periodo"] = datos.getPeriodo();

  var R=JSON.stringify([dato]);
  
  objarray.setobjARREGLO(eval(R)); 

}

  Vista.prototype.Modificar = function(a,b,c,d,e){

  objarray.Cambiar(a,b,c,d,e,posicion); 
	
  }
  
  Vista.prototype.Busqueda= function(valA,valB){
    
for(var i=0; i < objarray.getobjARREGLO().length; i++){
  console.log(objarray.getobjARREGLO()[i][valA]+ valB);
	if(objarray.getobjARREGLO()[i][valA] == valB){
	 var texto="Si esta";
	 break;
	}
	else{
	  var texto="no esta";
	}
}
	 	
  return texto;

  }
  
  Vista.prototype.CargarArreglo= function(){
  var numLINEAS = fs.readFileSync('./archivo.csv').toString().split('\n').length;
          //ciclo para leer linea individualmente
		  for(var x=0;  x < numLINEAS ; x++){
		    var array = fs.readFileSync('./archivo.csv').toString().split('\n');
			var txtLINEA=array[x].split(',');
			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var j=0; j<5; j++){
                	
					
					if(j===0){
					datos.setClave(txtLINEA[j]);
					}
					else if(j===1){
					datos.setNombre(txtLINEA[j]);
					}
					else if(j===2){
					datos.setModulos(txtLINEA[j]);
					}
					else if(j===3){
					datos.setCreditos(txtLINEA[j]);
					}
					else if(j===4){	
					datos.setPeriodo(txtLINEA[j]);
					}
				}
						

dato["Clave"] = datos.getClave();
dato["Nombre"] = datos.getNombre();
dato["Modulos"] = datos.getModulos();
dato["Creditos"] = datos.getCreditos();
dato["Periodo"] = datos.getPeriodo();

var R=JSON.stringify([dato]);

objarray.setobjARREGLO(eval(R));
		  }		  
  }
  
  Vista.prototype.Borrar= function(valor){
  objarray.Borrar(valor);
  }
  
  Vista.prototype.valPOSICION= function (valor){
  posicion=valor;
  }
  
  module.exports.Vista = Vista;
