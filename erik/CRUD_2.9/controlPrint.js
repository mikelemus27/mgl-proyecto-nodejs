var controlEntidad=require('./controEntidad');
var classArchivo=function()
{
	var fs = require('fs');
	var datos;
	

}
classArchivo.prototype.Guardar=function(captura)
{
	
	
	this.datos=captura
	var cadena="";
	var x=0;
	var cadena
	var entidad=this.objetoEntidad;
	console.log("prueba_print  "+this.datos.length);
	for(x=0;x<this.datos.length;x++)
	{
		cadena=cadena+(this.datos[x].getClave()+';'+this.datos[x].getNombre()+';'+this.datos[x].getTurno()+
			';'+this.datos[x].getCreditos()+';'+this.datos[x].getMaestro()+';'+"\n\r");
	};

		this.fs.writeFile('C:/mgl-proyecto-nodejs/erik/CRUD_2.9/materias.txt',cadena, function (err) {
				if (err) return console.log(err);
		console.log('Guardado');
		});
		
	
}
classArchivo.prototype.Cargar=function()
{
	var arrayTemp=[];
	var arrayDatos=[];
	
	
		var arreglo=this.fs.readFile("C:/mgl-proyecto-nodejs/erik/CRUD_2.9/materias.txt").toString();
		for(i;i<5;i++)
		{
			arrayTemp=arreglo[i].split(",");
			arrayDatos.push(arrayTemp);
			
		}
	
	return (this.arrayDatos);
	
}
module.exports=classArchivo;
