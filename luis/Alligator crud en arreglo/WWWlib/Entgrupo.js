     var entidadgrupo = function (grupo,numero,nombre,actividad,ubicacion){
		this._grupo=grupo; 
		this._numero=numero;
		this._nombre=nombre;
		this._actividad=actividad;
		this._ubicacion=ubicacion;
		
	  }
  
	  entidadgrupo.prototype.setgrupo = function(grupo){
	   
		if (typeof grupo === "indefinida"){
		  return this._grupo ;
		}else{
		  this._grupo = grupo;
		}
	  }
	  
	  entidadgrupo.prototype.getgrupo = function(){
		  return this._grupo;
	  }
	  
	  entidadgrupo.prototype.setnumero = function(numero){
	   
		if (typeof numero === "indefinida"){
		  return this._numero ;
		}else{
		  this._numero = numero;
		}
	  }
	  
	  entidadgrupo.prototype.getnumero = function(){
		  return this._numero;
	  }
	  
	  entidadgrupo.prototype.setnombre = function(nombre){
		
		if (typeof nombre === "indefinida"){
		  return this._nombre ;
		}else{
		  this._nombre = nombre;
		}
	  }
	  
	  entidadgrupo.prototype.getnombre = function(){
		  return this._nombre;
	  }
	  
	  entidadgrupo.prototype.setactividad = function(actividad){
		if (typeof actividad === "indefinida"){
		  return this._actividad ;
		}else{
		  this._nombre = actividad;
		}
	  }
	  
	   entidadgrupo.prototype.getactividad = function(){
		  return this._actividad;
	  }
	  
	  entidadgrupo.prototype.setubicacion = function(ubicacion){
		
		if (typeof ubicacion === "indefinida"){
		  return this._ubicacion ;
		}else{
		  this._ubicacion = ubicacion;
		}
	  }
	  entidadgrupo.prototype.getubicacion = function(){
		  return this._ubicacion;
	  }
		  
         module.exports = entidadgrupo;
		  
