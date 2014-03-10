 
var Entidad = Entidad || {}; 

;(function(){
  
  function Reticula(Clave,Nombre,Modulos,Creditos,Periodo){
    this._Clave = Clave; 
	this._Nombre= Nombre;
	this._Modulos= Modulos;
	this._Creditos= Creditos;
	this._Periodo= Periodo;
  }
  
  Reticula.prototype.setClave = function(Clave){
  
    if (typeof Clave === "undefined"){
      return this._Clave ;
    }else{
      this._Clave = Clave;
    }
  }
  
  
  Reticula.prototype.getClave = function(){
  
  return this._Clave;
  
  }
  
  
    Reticula.prototype.setNombre = function(Nombre){
  
    if (typeof Nombre === "undefined"){
      return this._Nombre;
    }else{
      this._Nombre = Nombre;
    }
  }
  
  
    Reticula.prototype.getNombre = function(){
	
	 return this._Nombre;
	}
  
    Reticula.prototype.setModulos = function(Modulos){
  
    if (typeof Modulos === "undefined"){
      return this._Modulos;
    }else{
      this._Modulos = Modulos;
    }
  }
  
    Reticula.prototype.getModulos = function(){
	return this._Modulos;
	}
    
	
	Reticula.prototype.setCreditos = function(Creditos){
  
    if (typeof Creditos === "undefined"){
      return this._Creditos;
    }else{
      this._Creditos = Creditos;
    }
  }
  
    Reticula.prototype.getCreditos = function(){
	return this._Creditos;
	}
	
	
	
	  Reticula.prototype.setPeriodo = function(Periodo){
  
    if (typeof Periodo === "undefined"){
      return this._Periodo;
    }else{
      this._Periodo = Periodo;
    }
  }
  
    Reticula.prototype.getPeriodo = function(){
	return this._Periodo;
	}
  
  
  Entidad.Reticula = Reticula;
})(); 


;(function(){
  
  function Vista(Clave,Nombre,Modulos,Creditos,Periodo){
    this._Clave = Clave; 
	this._Nombre= Nombre;
	this._Modulos= Modulos;
	this._Creditos= Creditos;
	this._Periodo= Periodo;
  }
  
  
  Vista.prototype.Mostrar = function (){
  
   
  
  }
  
  Vista.prototype.Capturar = function(){
  
   
  
  }

  

 
  Entidad.Vista = Vista;
})(); 



;(function(){
   function Menu(){
   
   }
   
   Menu.prototype.opciones = function(){
    console.log("**************Menu**********************");
	console.log("1)Capturar 2)Mostrar 3)Salir ");
	
	
	
   }
   
   Menu.prototype

  Entidad.Menu = Menu;
  
})(); 




var Menus = new Entidad.Menu();
  Menus.opciones();

