var varArray = {
    Temario: []
};

var Array = function (){
   
  }
  
  Array.prototype.setobjARRAY = function(objArray){
   
    varArray.Temario.push({ 
        "Tema" : objArray[0].Tema,
        "Subtemas" : objArray[0].Subtemas,
        "Unidades" : objArray[0].Unidades,
		"OG" : objArray[0].OG,
		"Bibliografia" : objArray[0].Bibliografia
    });
	
	
  }
  
  Array.prototype.getobjARRAY = function(){
  
  return varArray.Temario;
  
  }
  
  Array.prototype.Borrar = function (posicion){
  
varArray.Temario.splice(posicion,1);

}
  
  Array.prototype.Cambiar = function (val1,val2,val3,val4,val5,posicion){
  
  varArray.Temario[posicion].Tema = val1;
  varArray.Temario[posicion].Subtemas = val2;
  varArray.Temario[posicion].Unidades = val3;
  varArray.Temario[posicion].OG = val4;
  varArray.Temario[posicion].Bibliografia = val5;
  
  }  

  
  
  module.exports = Array; 