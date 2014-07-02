
  var grupos = function (grupo,numero,nombre,actividad,ubicacion){
    this._grupo = grupo; 
	this._numero= numero;
	this._nombre= nombre;
	this._actividad= actividad;
	this._ubicacion= ubicacion;
  }
  
  grupos.prototype.setgrupo = function(grupo){
  
    if (typeof grupo === "indefinido"){
      return this._grupo ;
    }else{
      this._grupo = grupo;
    }
  }
  
  
  grupos.prototype.getgrupo = function(){
  
  return this._grupo;
  
  }
  
  
  grupos.prototype.setnumero = function(numero){
  
    if (typeof numero === "indefinido"){
      return this._numero;
    }else{
      this._numero = numero;
    }
  }
  
  
  grupos.prototype.getnumero = function(){
	
	 return this._numero;
	}
  
    grupos.prototype.setnombre = function(nombre){
  
    if (typeof nombre === "indefinido"){
      return this._nombre;
    }else{
      this._nombre = nombre;
    }
  }
  
    grupos.prototype.getnombre = function(){
	return this._nombre;
	}
    
	
	grupos.prototype.setactividad = function(actividad){
  
    if (typeof actividad === "indefinido"){
      return this._actividad;
    }else{
      this._actividad = actividad;
    }
  }
  
    grupos.prototype.getactividad = function(){
	return this._actividad;
	}
	
	
	
	  grupos.prototype.setubicacion = function(ubicacion){
  
    if (typeof ubicacion === "indefinido"){
      return this._ubicacion;
    }else{
      this._ubicacion = ubicacion;
    }
  }
  
    grupos.prototype.getubicacion = function(){
	return this._ubicacion;
	}
	
	module.exports = grupos ;
  

