     var entidadCarrera = function (Nombre,Creditos,Clave,Area,Tipo){
		this._Nombre=Nombre; 
		this._Creditos=Creditos;
		this._Clave=Clave;
		this._Area=Area;
		this._Tipo=Tipo;
		
	  }
  
	  entidadCarrera.prototype.setNombre = function(Nombre){
	   
		if (typeof Nombre === "undefined"){
		  return this._Nombre ;
		}else{
		  this._Nombre = Nombre;
		}
	  }
	  
	  entidadCarrera.prototype.getNombre = function(){
		  return this._Nombre;
	  }
	  
	  entidadCarrera.prototype.setCreditos = function(Creditos){
	   
		if (typeof Creditos === "undefined"){
		  return this._Creditos ;
		}else{
		  this._Creditos = Creditos;
		}
	  }
	  
	  entidadCarrera.prototype.getCreditos = function(){
		  return this._Creditos;
	  }
	  
	  entidadCarrera.prototype.setClave = function(Clave){
		
		if (typeof Clave === "undefined"){
		  return this._Clave ;
		}else{
		  this._Clave = Clave;
		}
	  }
	  
	  entidadCarrera.prototype.getClave = function(){
		  return this._Clave;
	  }
	  
	  entidadCarrera.prototype.setArea = function(Area){
		if (typeof Area === "undefined"){
		  return this._Area ;
		}else{
		  this._Clave = Area;
		}
	  }
	  
	   entidadCarrera.prototype.getArea = function(){
		  return this._Area;
	  }
	  
	  entidadCarrera.prototype.setTipo = function(Tipo){
		
		if (typeof Tipo === "undefined"){
		  return this._Tipo ;
		}else{
		  this._Tipo = Tipo;
		}
	  }
	  entidadCarrera.prototype.getTipo = function(){
		  return this._Tipo;
	  }
		  
         module.exports = entidadCarrera;
		  
