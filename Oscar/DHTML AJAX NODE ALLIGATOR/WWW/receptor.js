(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("");
console.log("Responde el Servidor" );
 var Clase= lib.Vista;
 var obj=new Clase.Vista();
 var operacion = request.parameters.operacion;
	if(operacion=="Actualizar"){
	  commands.write(obj.Mostrar());
	}
	if(operacion=="Capturar"){
	  commands.write(obj.Capturar(request.parameters.txtCLAVE,request.parameters.txtNOMBRE,request.parameters.txtMODULOS,request.parameters.txtCREDITOS,request.parameters.txtPERIODO));
	}
	if(operacion=="Eliminar"){
	  commands.write(obj.Borrar(request.parameters.posiciones));
	}
	if(operacion=="Editar"){
	  commands.write(obj.Modificar(request.parameters.txtCLAVE,request.parameters.txtNOMBRE,request.parameters.txtMODULOS,request.parameters.txtCREDITOS,request.parameters.txtPERIODO,request.parameters.posiciones));
	}
	if(operacion=="Buscar"){
	  commands.write(obj.buscar());
	}
	if(operacion=="Guardar Archivo"){
	commands.write(obj.GuardarCambio());
	
	}

})