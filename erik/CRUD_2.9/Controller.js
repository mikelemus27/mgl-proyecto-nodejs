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
	return this.imprimirObjeto;
		
};
classController.prototype.View=function()
{
	var arreglo=this.controlArreglo.getArray();
	objToJson={
		array:arreglo
	};
	json=JSON.stringify(objToJson);
	return (json);
}
classController.prototype.Read=function()
{
	console.log("Creando objeto Read");
	var arreglo=this.print.Cargar();
	var key,name,turn,credits,teacher;
	
	var arreglo=this.controlArreglo.getArray();
	objJSON={
		array:arreglo
	};
	return json=JSON.stringify(objJSON);
	
}

classController.prototype.deleteObject=function(clave)
{
	console.log(this.count);
	var key=clave;
	this.controlArreglo.deleteObject(key);
	
}

module.exports=classController;
