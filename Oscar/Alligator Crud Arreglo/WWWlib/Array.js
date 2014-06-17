var varARREGLO = {
    Reticula: []
};

var Arreglo = function (){
   
  }
  
  Arreglo.prototype.setobjARREGLO = function(obj){
   
    varARREGLO.Reticula.push({ 
        "Clave" : obj[0].Clave,
        "Nombre" : obj[0].Nombre,
        "Modulos" : obj[0].Modulos,
		"Creditos" : obj[0].Creditos,
		"Periodo" : obj[0].Periodo
    });
	
	
  }
  
  Arreglo.prototype.getobjARREGLO = function(){
  
  return varARREGLO.Reticula;
  
  }
  

  
  
  module.exports = Arreglo; 