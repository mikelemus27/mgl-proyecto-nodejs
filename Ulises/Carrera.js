var myClase = myClase || {}; 

;(function(){
  
  // Constructor
  function Carrera(Nombre,Creditos,Clave,Area,Tipo){
    this._Nombre = Nombre; // as convention, ._*** is for privates properties
	this._Creditos = Creditos;
	this._Clave = Clave;
	this._Area = Area;
	this._Tipo = Tipo;
	
    // Note: there is a more robust way to do do private, but this will be for later
  }
  
  // A ObjectType Method
  Carrera.prototype.setNombre = function(Nombre){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof Nombre === "undefined"){
      return this._Nombre ;
    }else{
      this._Nombre = Nombre;
    }
  }
  
  Carrera.prototype.getNombre = function(){
      return this._Nombre;
  }
  
  Carrera.prototype.setCreditos = function(Creditos){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof Creditos === "undefined"){
      return this._Creditos ;
    }else{
      this._Creditos = Creditos;
    }
  }
  
  Carrera.prototype.getCreditos = function(){
      return this._Creditos;
  }
  
  Carrera.prototype.setClave = function(Clave){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof Clave === "undefined"){
      return this._Clave ;
    }else{
      this._Clave = Clave;
    }
  }
  
  Carrera.prototype.getClave = function(){
      return this._Clave;
  }
  
  Carrera.prototype.setArea = function(Area){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof Area === "undefined"){
      return this._Area ;
    }else{
      this._Clave = Area;
    }
  }
  
   Carrera.prototype.getArea = function(){
      return this._Area;
  }
  
  Carrera.prototype.setTipo = function(Tipo){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof Tipo === "undefined"){
      return this._Tipo ;
    }else{
      this._Tipo = Tipo;
    }
  }
  Carrera.prototype.getTipo = function(){
      return this._Tipo;
  }
  
  // expose the Carrera "Object Type" in the myClase Nombrespace
  myClase.Carrera = Carrera;
})(); 





;(function(){
  
  // Constructor
  function Carrera(Nombre,Creditos,Clave,Area,Tipo){
    this._Nombre = Nombre; // as convention, ._*** is for privates properties
	this._Creditos = Creditos;
	this._Clave = Clave;
	this._Area = Area;
	this._Tipo = Tipo;
	
    // Note: there is a more robust way to do do private, but this will be for later
  }
  
  // A ObjectType Method
  Carrera.prototype.setNombre = function(Nombre){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof Nombre === "undefined"){
      return this._Nombre ;
    }else{
      this._Nombre = Nombre;
    }
  }
  
  Carrera.prototype.getNombre = function(){
      return this._Nombre;
  }
  
  Carrera.prototype.setCreditos = function(Creditos){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof Creditos === "undefined"){
      return this._Creditos ;
    }else{
      this._Creditos = Creditos;
    }
  }
  
  Carrera.prototype.getCreditos = function(){
      return this._Creditos;
  }
  
  Carrera.prototype.setClave = function(Clave){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof Clave === "undefined"){
      return this._Clave ;
    }else{
      this._Clave = Clave;
    }
  }
  
  Carrera.prototype.getClave = function(){
      return this._Clave;
  }
  
  Carrera.prototype.setArea = function(Area){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof Area === "undefined"){
      return this._Area ;
    }else{
      this._Clave = Area;
    }
  }
  
   Carrera.prototype.getArea = function(){
      return this._Area;
  }
  
  Carrera.prototype.setTipo = function(Tipo){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof Tipo === "undefined"){
      return this._Tipo ;
    }else{
      this._Tipo = Tipo;
    }
  }
  Carrera.prototype.getTipo = function(){
      return this._Tipo;
  }
  
  // expose the Carrera "Object Type" in the myClase Nombrespace
  myClase.Carrera = Carrera;
})(); 








// ... somewhere else in your js or page code

// create an instance of this Object Type
var Carrera2 = new myClase.Carrera();

Carrera2.setNombre("Sistemas");

// get some properties
console.log("Tu carrera es:  " + Carrera2.getNombre());
