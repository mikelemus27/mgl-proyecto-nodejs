/******************************************************************
recursos
http://stackoverflow.com/questions/18994712/recursive-call-within-prototype-function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
http://www.javascriptkata.com/2007/05/14/how-to-use-the-self-with-object-oriented-javascript-and-closures/
http://stackoverflow.com/questions/21008229/javascript-call-function-inside-object-from-a-callback-function
http://erikeldridge.wordpress.com/2011/01/06/re-scoping-javascript-callback-functions-using-call-and-apply/
http://stackoverflow.com/questions/18994712/recursive-call-within-prototype-function
http://www.mattsnider.com/recursive-function-performance-static-vs-this/#recursion_test
http://procbits.com/2011/10/29/a-node-js-experiment-thinking-asynchronously-recursion-calculate-file-size-directory
http://www.derekhammer.com/2010/07/05/node-js-patterns.html
http://utahjs.com/2010/09/16/nodejs-events-and-recursion-readdir/
http://javascript.about.com/library/blrecursive.htm

*/

var classMaterias= function(){
var clave="prueba";


}

classMaterias.prototype.setClave = function(clave)
{    
	console.log("entrando en sentclave");
	console.log("el valor del parametro clave es "+clave);
	this.clave=clave;
	console.log("el valor de la clave es "+this.clave);
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
classProcesos.prototype={
	curr:0,
	ask:function(question,format,callback)
       {
	var self=this;       
	var stdin=process.stdin;
	var stdout=process.stdout;
	stdin.resume();
	stdout.write(question+": ");
	stdin.once('data',(function(data)
		{
			data=data.toString().trim();
			if(format.test(data))
			{
			callback(data)
			}
			else{
				stdout.write("No cumple con el formato "+format+" \n")
				this.ask(question,format,callback);
			}
		}).bind(this));
       }
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
	peticion.ask("Clave ",/.+/,function(clave){
		datos.setClave(clave)
        	peticion.ask("Nombre ",/.+/,function(nombre){
			datos.setNombre(nombre)
			peticion.ask("Turno ",/.+/,function(turno){
				datos.setTurno(turno)
				peticion.ask("Creditos ",/[0-9]+/,function(creditos){
					datos.setCreditos(creditos)
					peticion.ask("Maestro ",/.+/,function(maestro){
						datos.setMaestro(maestro)
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

