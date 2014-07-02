var varARREGLO = {
    grupos: []
};

var Arreglo = function (){
   
  }
  
  Arreglo.prototype.setobjARREGLO = function(obj){
   
    varARREGLO.grupos.push({ 
        "grupo" : obj[0].grupo,
        "numero" : obj[0].numero,
        "nombre" : obj[0].nombre,
		"actividad" : obj[0].actividad,
		"ubicacion" : obj[0].ubicacion
    });
	
	
  }
  
  Arreglo.prototype.getobjARREGLO = function(){
  
  return varARREGLO.grupos;
  
  }
  
  Arreglo.prototype.Borrar = function (pos){
  
varARREGLO.grupos.splice(pos,1);

}
  
  Arreglo.prototype.Cambiar =function (a,b,c,d,e,pos){
  
  varARREGLO.grupos[pos].grupo = a;
  varARREGLO.grupos[pos].numero = b;
  varARREGLO.grupos[pos].nombre= c;
  varARREGLO.grupos[pos].actividad=d;
  varARREGLO.grupos[pos].ubicacion=e;
  
  }  

  
  
  module.exports = Arreglo; 