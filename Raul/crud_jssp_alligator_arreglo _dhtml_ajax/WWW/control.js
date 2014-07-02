(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("");
var procesos= lib.Modulosprocesoshacer;
 var objprocesos=new procesos.Modulosprocesoshacer();
 var proceso = request.parameters.proceso;

	if(proceso=="Actualizar"){
	  commands.write(objprocesos.MostrarDatos());
	}
	
	if(proceso=="Capturar"){
	  commands.write(objprocesos.GuardarDatos(request.parameters.txtNombre,request.parameters.txtTipo,request.parameters.txtRecurso,request.parameters.txtTiempo,request.parameters.txtMateria));
	}
	if(proceso=="Eliminar"){
	  commands.write(objprocesos.EliminarDatos(request.parameters.linea));
	}
	if(proceso=="Modificar"){
	  commands.write(objprocesos.ModificarDatos(request.parameters.txtNombre,request.parameters.txtTipo,request.parameters.txtRecurso,request.parameters.txtTiempo,request.parameters.txtMateria,request.parameters.linea));
	}
	if(proceso=="Buscar"){
	  commands.write(objprocesos.BuscarDato(request.parameters.txtDato,request.parameters.cmbAtributo));
	}
	if(proceso=="Guardar Archivo"){
	commands.write(objprocesos.GuardarCambios());
	
	}

commands.writeEscapedText("%09%0A");
})