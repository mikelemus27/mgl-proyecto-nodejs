var entidad=require('./entidadMATERIAS');
var captura=new entidad;
var classArray=function()
{
	this.array=new Array();
	this.tam=0;
	console.log("creando objeto arreglo");
};

classArray.prototype.addObject=function(nuevoObjeto)
{
	
	this.array.push(nuevoObjeto);
	return this.array;
};
classArray.prototype.deleteObject=function(clave)
{
	var key=clave;
	console.log(key);
	for(i=0;this.tam<i;i++)
	{
		if(this.array[i].getClave()==clave)
		{
			this.array[i]=captura;
		}
	}
	console.log(this.array);
};
classArray.prototype.editObject=function()
{
};
classArray.prototype.getArray=function()
{
	return this.array;
};
classArray.prototype.setArray=function(array)
{
	var array=this.array;
};
module.exports=classArray;
