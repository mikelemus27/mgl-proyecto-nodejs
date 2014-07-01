var Temario = function(tema,subtemas,unidades,OG,bibliografia){
		this._tema= tema;
		this._subtemas= subtemas;
		this._unidades= unidades;
		this._OG= OG;
		this._bibliografia= bibliografia;
	}
	
	//El objeto del metodo resive un dato
	Temario.prototype.setTema = function(tema){
		if (typeof tema === "undefined"){
			return this._tema;
		}else{
			this._tema = tema;
		}
	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.getTema = function(){
		return this._tema;
	}


	Temario.prototype.setSubtemas = function(subtemas){
		if (typeof subtemas === "undefined"){
			return this._subtemas;
		}else{
			this._subtemas = subtemas;
		}
	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.getSubtemas = function(){
		return this._subtemas;
	}

	Temario.prototype.setUnidades = function(unidades){
		if (typeof unidades === "undefined"){
			return this._unidades;
		}else{
			this._unidades = unidades;
		}

	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.getUnidades = function(){
		return this._unidades;
	}

	Temario.prototype.setObjG = function(OG){
		if (typeof OG === "undefined"){
			return this._OG;
		}else{
			this._OG = OG;
		}
	}

   //En esta funcion regresa el valor que se mando
	Temario.prototype.getObjG = function(){
		return this._OG;
	}

	Temario.prototype.setBibliografia = function(bibliografia){
		if (typeof bibliografia === "undefined"){
			return this._bibliografia;
		}else{
			this._bibliografia = bibliografia;
		}

	}
   //En esta funcion regresa el valor que se mando
	Temario.prototype.getBibliografia = function(){
		return this._bibliografia;
	}
	
	
	module.exports = Temario;