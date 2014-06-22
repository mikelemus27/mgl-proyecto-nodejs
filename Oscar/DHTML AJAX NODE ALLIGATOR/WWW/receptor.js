(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("");

console.log("Responde el Servidor" );
console.log(request.parameters.btnINDICADOR);
console.log(request.parameters.txtCLAVE);
console.log(request.parameters.txtNOMBRE);
console.log(request.parameters.txtMODULOS);
console.log(request.parameters.txtCREDITOS);
console.log(request.parameters.txtPERIODO);

console.log(request.headers);
commands.write("ssss");

})