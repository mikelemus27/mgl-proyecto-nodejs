// try to always scope your API, Object Types, properties in a namespace   
var mymodule = mymodule || {}; 

;(function(){

	//En la siguiente funcion o "constructor"que se llama temario colocamos todos los atributos que van a resivir un valor
	function Temario(tema,subtemas,unidades,OG,bibliografia){
		this._tema = tema;
		this._subtemas = subtemas;
		this._unidades = unidades;
		this._OG = OG;
		this._bibliografia = bibliografia


	}

	//El objeto del metodo resive un dato
	Temario.prototype.settema = function(tema){
		if (typeof tema === "undefined"){
			return this._tema;
		}else{
			this._tema = tema;
		}

	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.gettema = function(){
		return this._tema;
	}


	Temario.prototype.setsubtemas = function(subtemas){
		if (typeof subtemas === "undefined"){
			return this._subtemas;
		}else{
			this._subtemas = subtemas;
		}

	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.getsubtemas = function(){
		return this._subtemas;
	}

	Temario.prototype.setunidades = function(unidades){
		if (typeof unidades === "undefined"){
			return this._unidades;
		}else{
			this._unidades = unidades;
		}

	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.getunidades = function(){
		return this._unidades;
	}

	Temario.prototype.setOG = function(OG){
		if (typeof OG === "undefined"){
			return this._OG;
		}else{
			this._OG = OG;
		}

	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.getOG = function(){
		return this._OG;
	}

	Temario.prototype.setbibliografia = function(bibliografia){
		if (typeof bibliografia === "undefined"){
			return this._bibliografia;
		}else{
			this._bibliografia = bibliografia;
		}

	}
   //En esta funcion regresa el valor que se mando
	Temario.prototype.getbibliografia = function(){
		return this._bibliografia;
	}



	mymodule.Temario = Temario;

})();

//En esta variable estamos creando instancia entre temario1 y Temario
var temario1 = new mymodule.Temario();

temario1.settema("PWEB");

temario1.setsubtemas("1.2. Modelado");

temario1.setunidades("4");



console.log("Nombre del tema: " + temario1.gettema());

console.log("Nombre del subtema: " + temario1.getsubtemas());

console.log("Numero de unidades: " + temario1.getunidades());