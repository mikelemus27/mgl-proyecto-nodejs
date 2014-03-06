var classMaterias= function(){}
classMaterias.prototype.setClave = function(clave)
{
	this.clave=clave;
};
classMaterias.prototype.getClave = function()
{
	return this.clave;
};
classMaterias.prototype.setNombre = function(nombre)
{
	this.nombre=nombre;
};
classMaterias.prototype.getNombre = function()
{
	return this.nombre;
}
classMaterias.prototype.setTurno = function(turno)
{
	this.turno=turno;	
}
classMaterias.prototype.getTurno= function()
{
	return this.turno;
}
classMaterias.prototype.setCreditos = function(creditos)
{
	this.creditos=creditos;
}
classMaterias.prototype.getCreditos = function()
{
	return this.creditos;
}
classMaterias.prototype.setMaestro = function(maestro)
{
	this.maestro=maestro;
}
classMaterias.prototype.getMaestro = function()
{
	return this.maestro;
}
//////////
var classProcesos=function(){}
classProcesos.prototype.ask=function(question,format,callback)
{
	var stdin=process.stdin;
	var stdout=process.stdout;
	stdin.resume();
	stdout.write(question+": ");
	stdin.once('data',function(data)
		{
			data=data.toString().trim();
			if(format.test(data))
			{
			callback(data)
			}
			else
				stdout.write("No cumple con el formato "+format+" \n")
//				this.ask(question,format,callback);
		});
};
//////////
var classControl=function(){};
classControl.prototype.inicio =function()
{
	var clave="";
	var nombre="";
	var turno="";
	var creditos=0;
	var maestro="";
	var datos= new classMaterias();
	var peticion=new classProcesos();
	peticion.ask("Clave ",/.+/,function(){datos.setClave(clave)
peticion.ask("Nombre ",/.+/,function(){datos.setNombre(nombre)

	peticion.ask("Turno ",/.+/,function(){datos.setTurno(turno)
	peticion.ask("Creditos ",/[0-9]+/,function(){datos.setCreditos(creditos)
	peticion.ask("Maestro ",/.+/,function(){datos.setMaestro(maestro)
	 console.log("\n\n Resumen:\n------------------------------");                                            
	                   console.log(">>Clave: ",datos.getClave());
	                   console.log(">>Nombre: ",datos.getNombre());
	                   console.log(">>Turno: ",datos.getTurno());
	                   console.log(">>Creditos: ",datos.getCreditos());
	                   console.log(">>Maestro: ",datos.getMaestro());
	            process.exit();

	});
	
	});
	
	});					

});				

});				
};
var main=new classControl();
main.inicio();

