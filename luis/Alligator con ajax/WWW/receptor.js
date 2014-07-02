(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("");

console.log("Responde el Servidor" );

 var Clase= lib.Vista;
 var obj=new Clase.Vista();
 var operacion = request.parameters.operacion;

	if(operacion=="Actualizar"){
	  commands.write(obj.Mostrar());
	}
	if(operacion=="Capturar"){
	  commands.write(obj.Capturar(request.parameters.txtgrupo,request.parameters.txtnumero,request.parameters.txtnombre,request.parameters.txtactividad,request.parameters.txtubicacion));
	}
	if(operacion=="Eliminar"){
	  commands.write(obj.Borrar(request.parameters.posiciones));
	}
	if(operacion=="Editar"){
	  commands.write(obj.Modificar(request.parameters.txtgrupo,request.parameters.txtnumero,request.parameters.txtnombre,request.parameters.txtactividad,request.parameters.txtubicacion,request.parameters.posiciones));
	}
	if(operacion=="Buscar"){
	  commands.write(obj.buscar());
	}
	if(operacion=="Guardar Archivo"){
	commands.write(obj.GuardarCambio());
	
	}



})