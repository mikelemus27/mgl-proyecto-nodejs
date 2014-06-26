var varArray = {
    entidadCarrera: []
};

var Array = function (){
   
  }
  
  Array.prototype.setObjArray = function(objArray){
   
    varArray.entidadCarrera.push({ 
        "Nombre" : objArray[0].Nombre,
        "Creditos" : objArray[0].Creditos,
        "Clave" : objArray[0].Clave,
		"Area" : objArray[0].Area,
		"Tipo" : objArray[0].Tipo
    });
	
	
  }
  
  Array.prototype.getObjArray = function(){
  
  return varArray.entidadCarrera;
  
  }
  
  Array.prototype.Delete = function (posicion){
  
varArray.entidadCarrera.splice(posicion,1);

}
  
  Array.prototype.Update = function (val1,val2,val3,val4,val5,posicion){
  
  varArray.entidadCarrera[posicion].Nombre = val1;
  varArray.entidadCarrera[posicion].Creditos = val2;
  varArray.entidadCarrera[posicion].Clave = val3;
  varArray.entidadCarrera[posicion].Area = val4;
  varArray.entidadCarrera[posicion].Tipo = val5;
  
  }  

  
  
  module.exports = Array; 