     
	
  console.log('clase entidad');

function ActividadesDidacticas( nombre, tipo, recurso, tiempo, materia){
     this._nombre = nombre; // as convention, ._*** is for privates properties
     this._tipo = tipo;
	 this._recurso = recurso;
	 this._tiempo = tiempo;
	 this._maateria = materia;
	 //this._dato = dato;

	 }
    // A ObjectType Method
ActividadesDidacticas.prototype.setNombreAct = function(nombre){
    
      this._nombre = nombre;
	  //cargarModeloArchivo.CargarCargar(nombre);
  }

  ActividadesDidacticas.prototype.getNombreAct = function (){
      return this._nombre;
	  
  }  
   
  ActividadesDidacticas.prototype.setTipo = function(tipo){
    
	this._tipo = tipo;
	//cargarModeloArchivo.getTipo(tipo);
  }//fin de prototype tipo
 
  ActividadesDidacticas.prototype.getTipo = function(){
  return this._tipo;
  //cargarModeloArchivo.CargarCargar(tipo);
  }

  ActividadesDidacticas.prototype.setRecurso = function(recurso){
     
      this._recurso = recurso;
	  //cargarModeloArchivo.getRecurso(recurso);
   }
 
  ActividadesDidacticas.prototype.getRecurso = function(){
  return this._recurso;
  //cargarModeloArchivo.CargarCargar(recurso);
  }
  
  ActividadesDidacticas.prototype.setTiempo = function(tiempo){
    
      this._tiempo = tiempo;
	  //cargarModeloArchivo.getTiempo(tiempo);
   }
 
  ActividadesDidacticas.prototype.getTiempo = function(){
  return this._tiempo;
  //cargarModeloArchivo.CargarCargar(Tiempo);
  }
  
  ActividadesDidacticas.prototype.setMateria = function(materia){    
      this._materia = materia;
	 // console.log('variable materia:    '+materia);
   //cargarModeloArchivo.CargarCargar();
     }
 
  ActividadesDidacticas.prototype.getMateria = function(){
  
   //return this._materia;
   //cargarModeloArchivo.CargarCargar(materia);
   return this._materia;

   }

module.exports=ActividadesDidacticas;