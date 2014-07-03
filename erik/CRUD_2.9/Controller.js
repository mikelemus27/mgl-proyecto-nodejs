var controlEntidad=require('./controEntidad');
var controlArray=require('./controlArray');
var controlPrint=require('./controlPrint');
var classController=function()
{
	console.log("Crenado objeto send");
	this.nuevoObjeto;
	this.controlArreglo= new controlArray();
	this.control=new controlEntidad();
	this.print=new controlPrint();
	this.count=0;
	console.log(this.count);
};
classController.prototype.Data=function(clave,nombre,turno,creditos,maestro)
{
	var key=clave;
	var name=nombre;
	var turn=turno;
	var credits=creditos;
	var teacher=maestro;
	
	nuevoObjeto=this.control.nuevoObjeto(key,name,turn,credits,teacher);
	//console.log(nuevoObjeto);
	
	imprimirObjeto=this.controlArreglo.addObject(nuevoObjeto);
	this.print.Guardar(imprimirObjeto);
		
};
classController.prototype.View=function()
{
	var arreglo=this.controlArreglo.getArray();
	console.log(arreglo);	
}

classController.prototype.deleteObject=function(clave)
{
	console.log(this.count);
	var key=clave;
	this.controlArreglo.deleteObject(key);
	
}

module.exports=classController;
