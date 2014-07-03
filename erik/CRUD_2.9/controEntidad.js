var entidadMaterias=require('./entidadMATERIAS');

var classControlEntidad=function()
{
	this.arreglo= new Array();
	this.posicion;
	this.captura=new  entidadMaterias();
}

classControlEntidad.prototype.nuevoObjeto=function(clave, nombre,turno,creditos,maestro)
{	

	this.captura.setClave(clave);
	this.captura.setNombre(nombre);
	this.captura.setTurno(turno);
	this.captura.setCreditos(creditos);
	this.captura.setMaestro(maestro);
	return this.captura;

}

module.exports=classControlEntidad;
