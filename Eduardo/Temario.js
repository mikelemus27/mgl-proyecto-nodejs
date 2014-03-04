// try to always scope your API, Object Types, properties in a namespace   
var mymodule = mymodule || {}; 

;(function(){

	//En la siguiente funcion o "constructor"que se llama temario colocamos todos los atributos que van a resivir un valor
	function Temario(tema){
		this._tema = tema;
		
	}

	//El objeto del metodo resive un dato
	Temario.prototype.settema = function(tema){
		if (typeof tema === "undefined"){
			return this._tema;
		}else{
			this._tema = tema;
		}

	}

	Temario.prototype.gettema = function(){
		return this._tema;
	}

	
	mymodule.Temario = Temario;

})();

//En esta variable estamos creando instancia entre temario1 y Temario
var temario1 = new mymodule.Temario("PWEB1");

console.log("Nombre del tema: " + temario1.gettema());