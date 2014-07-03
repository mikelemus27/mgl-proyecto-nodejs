var controlEntidad=require('./controEntidad');
var classArchivo=function()
{
	
	var datos;
	

}
classArchivo.prototype.Guardar=function(captura)
{
	
	fs = require('fs');
	this.datos=captura
	var cadena="";
	var x=0;
	var cadena
	var entidad=this.objetoEntidad;
	console.log("prueba_print  "+this.datos.length);
	for(x=0;x<this.datos.length;x++)
	{
		cadena=cadena+(this.datos[x].getClave()+';'+this.datos[x].getNombre()+';'+this.datos[x].getTurno()+
			';'+this.datos[x].getCreditos()+';'+this.datos[x].getMaestro()+';'+"\n");
	};

		fs.writeFile('C:/mgl-proyecto-nodejs/erik/CRUD_2.9/materias.txt',cadena, function (err) {
				if (err) return console.log(err);
		console.log('Guardado');
		});
		
	
}
module.exports=classArchivo;
