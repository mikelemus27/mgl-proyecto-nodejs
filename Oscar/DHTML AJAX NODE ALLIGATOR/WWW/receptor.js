(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("");

console.log("Responde el Servidor" );
console.log(request.parameters.operacion);
console.log(request.parameters.txtCLAVE);
console.log(request.parameters.txtNOMBRE);
console.log(request.parameters.txtMODULOS);
console.log(request.parameters.txtCREDITOS);
console.log(request.parameters.txtPERIODO);

 var Clase= lib.Vista;
 var obj=new Clase.Vista();
 var operacion = request.parameters.operacion;

	if(operacion=="Actualizar"){
	     
		console.log("entro a modo Actualizar");
	}

console.log(request.headers);
commands.write("ssss");

})