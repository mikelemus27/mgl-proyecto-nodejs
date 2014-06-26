(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("");

console.log("Respuesta del Server" );

 var objClase=lib.VistaControlCarrera;
 var objVisCtrl=new objClase.VistaControlCarrera();
 var operacion = request.parameters.operacion;

	if(operacion=="Actualizar"){
	  commands.write(objVisCtrl.Mostrar());
	}
	if(operacion=="Capturar"){
	  commands.write(objVisCtrl.Capturar(request.parameters.carrera,request.parameters.creditos,request.parameters.clave,request.parameters.area,request.parameters.tipo));
	}
	if(operacion=="Eliminar"){
	  commands.write(objVisCtrl.Eliminar(request.parameters.posicion));
	}
	if(operacion=="Editar"){
	  commands.write(objVisCtrl.Modificar(request.parameters.carrera,request.parameters.creditos,request.parameters.clave,request.parameters.area,request.parameters.tipo,request.parameters.posicion));
	}
	if(operacion=="Buscar"){
	  commands.write(objVisCtrl.buscar());
	}
	if(operacion=="Guardar en Archivo"){
	commands.write(objVisCtrl.saveCambios());
	
	}



})