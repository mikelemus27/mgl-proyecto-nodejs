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
  
  Arreglo.prototype.Borrar = function (pos){
  
varARREGLO.Reticula.splice(pos,1);

}
  
  Arreglo.prototype.Cambiar =function (a,b,c,d,e,pos){
  
  varARREGLO.Reticula[pos].Clave = a;
  varARREGLO.Reticula[pos].Nombre = b;
  varARREGLO.Reticula[pos].Modulos= c;
  varARREGLO.Reticula[pos].Creditos=d;
  varARREGLO.Reticula[pos].Periodo=e;
  
  }  

  
  
  module.exports = Arreglo; 