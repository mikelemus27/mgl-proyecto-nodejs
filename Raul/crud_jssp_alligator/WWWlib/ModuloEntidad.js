     
	
  console.log('clase entidad');

function ActividadesDidacticas( nombre, tipo, recurso, tiempo, materia){
     this._nombre = nombre; // as convention, ._*** is for privates properties
     this._tipo = tipo;
	 this._recurso = recurso;
	 this._tiempo = tiempo;
	 this._maateria = materia;
	

	 }
    // A ObjectType Method
ActividadesDidacticas.prototype.setNombreAct = function(nombre){
    
      this._nombre = nombre;

  }

  ActividadesDidacticas.prototype.getNombreAct = function (){
      return this._nombre;
	  
  }  
   
  ActividadesDidacticas.prototype.setTipo = function(tipo){
    
	this._tipo = tipo;

  }//fin de prototype tipo
 
  ActividadesDidacticas.prototype.getTipo = function(){
  return this._tipo;
  
  }

  ActividadesDidacticas.prototype.setRecurso = function(recurso){
     
      this._recurso = recurso;
	
   }
 
  ActividadesDidacticas.prototype.getRecurso = function(){
  return this._recurso;
 
  }
  
  ActividadesDidacticas.prototype.setTiempo = function(tiempo){
    
      this._tiempo = tiempo;
	 
   }
 
  ActividadesDidacticas.prototype.getTiempo = function(){
  return this._tiempo;
 
  }
  
  ActividadesDidacticas.prototype.setMateria = function(materia){    
      this._materia = materia;
	
     }
 
  ActividadesDidacticas.prototype.getMateria = function(){
  
   return this._materia;

   }

module.exports = ActividadesDidacticas;