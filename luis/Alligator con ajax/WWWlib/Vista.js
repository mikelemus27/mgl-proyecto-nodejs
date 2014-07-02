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
				 contenedor.write(objarray.getobjARREGLO()[i]["grupo"]+','+
						 objarray.getobjARREGLO()[i]["numero"]+','+
						 objarray.getobjARREGLO()[i]["nombre"]+','+
						 objarray.getobjARREGLO()[i]["actividad"]+','+
						 objarray.getobjARREGLO()[i]["ubicacion"]+'\r');
				}
				else{
				
				contenedor.write(objarray.getobjARREGLO()[i]["grupo"]+','+
						 objarray.getobjARREGLO()[i]["numero"]+','+
						 objarray.getobjARREGLO()[i]["nombre"]+','+
						 objarray.getobjARREGLO()[i]["actividad"]+','+
						 objarray.getobjARREGLO()[i]["ubicacion"]+'\n');
				}
			}
	 
	
      contenedor.end();
		});
		
		return JSON.stringify(objarray.getobjARREGLO());
  } 
  
  Vista.prototype.Mostrar = function (){


     return JSON.stringify(objarray.getobjARREGLO());

  }
  
  Vista.prototype.Capturar = function(valgrupo,valnumero,valnombre,valactividad,valubicacion){
  
  datos.setgrupo(valgrupo);
  datos.setnumero(valnumero);
  datos.setnombre(valnombre);
  datos.setactividad(valactividad);
  datos.setubicacion(valubicacion);
  
  dato["grupo"] = datos.getgrupo();
  dato["numero"] = datos.getnumero();
  dato["nombre"] = datos.getnombre();
  dato["actividad"] = datos.getactividad();
  dato["ubicacion"] = datos.getubicacion();

  var R=JSON.stringify([dato]);
  
  objarray.setobjARREGLO(eval(R)); 
  
  return JSON.stringify(objarray.getobjARREGLO());

}

  Vista.prototype.Modificar = function(a,b,c,d,e,pos){

  objarray.Cambiar(a,b,c,d,e,pos); 
  return JSON.stringify(objarray.getobjARREGLO());
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
					datos.setgrupo(txtLINEA[j]);
					}
					else if(j===1){
					datos.setnumero(txtLINEA[j]);
					}
					else if(j===2){
					datos.setnombre(txtLINEA[j]);
					}
					else if(j===3){
					datos.setactividad(txtLINEA[j]);
					}
					else if(j===4){	
					datos.setubicacion(txtLINEA[j]);
					}
				}
						

dato["grupo"] = datos.getgrupo();
dato["numero"] = datos.getnumero();
dato["nombre"] = datos.getnombre();
dato["actividad"] = datos.getactividad();
dato["ubicacion"] = datos.getubicacion();

var R=JSON.stringify([dato]);

objarray.setobjARREGLO(eval(R));
		  }		  
  }
  
  Vista.prototype.Borrar= function(valor){
  objarray.Borrar(valor);
  return JSON.stringify(objarray.getobjARREGLO());
  }
  
  Vista.prototype.valPOSICION= function (valor){
  posicion=valor;
  }
  
  module.exports.Vista = Vista;
