var varArray = {
    entidadgrupo: []
};

var Array = function (){
   
  }
  
  Array.prototype.setObjArray = function(objArray){
   
    varArray.entidadgrupo.push({ 
        "grupo" : objArray[0].grupo,
        "numero" : objArray[0].numero,
        "nombre" : objArray[0].nombre,
		"actividad" : objArray[0].actividad,
		"ubicacion" : objArray[0].ubicacion
    });
	
	
  }
  
  Array.prototype.getObjArray = function(){
  
  return varArray.entidadgrupo;
  
  }
  
  Array.prototype.Delete = function (posicion){
  
varArray.entidadgrupo.splice(posicion,1);

}
  
  Array.prototype.Update = function (val1,val2,val3,val4,val5,posicion){
  
  varArray.entidadgrupo[posicion].grupo = val1;
  varArray.entidadgrupo[posicion].numero = val2;
  varArray.entidadgrupo[posicion].nombre = val3;
  varArray.entidadgrupo[posicion].actividad = val4;
  varArray.entidadgrupo[posicion].ubicacion = val5;
  
  }  

  
  
  module.exports = Array; 