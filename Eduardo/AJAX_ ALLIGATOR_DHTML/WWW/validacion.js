(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("");

console.log("Responde el Servidor" );

 var objClase= lib.Vista;
 var objVista=new objClase.Vista();
 var operacion = request.parameters.operacion;

	if(operacion=="Actualizar"){
	  commands.write(objVista.Mostrar());
	}
	if(operacion=="Pedirdatos"){
	  commands.write(objVista.Pedirdatos(request.parameters.txtTema,request.parameters.txtSubtemas,request.parameters.txtUnidades,request.parameters.txtOG,request.parameters.txtBibliografia));
	}
	if(operacion=="Eliminar"){
	  commands.write(objVista.Borrar(request.parameters.posicion));
	}
	if(operacion=="Editar"){
	  commands.write(objVista.Modificar(request.parameters.txtTema,request.parameters.txtSubtemas,request.parameters.txtUnidades,request.parameters.txtOG,request.parameters.txtBibliografia,request.parameters.posicion));
	}
	if(operacion=="Buscar"){
	  commands.write(objVista.buscar());
	}
	if(operacion=="Guardar Archivo"){
	commands.write(objVista.GuardarCambio());
	
	}



})