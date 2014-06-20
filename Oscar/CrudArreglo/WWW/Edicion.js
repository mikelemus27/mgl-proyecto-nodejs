(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText(""); 
		  var z=request.parameters.btnINDICADOR;
		  var x= lib.Vista;
		  var y=new x.Vista();
		  
		  if(z=="Guardar"){
		  y.Modificar(request.parameters.txtCLAVE,request.parameters.txtNOMBRE,request.parameters.txtMODULOS,request.parameters.txtCREDITOS,request.parameters.txtPERIODO);
		  commands.sendRedirect("./index.html");
		  }
		  if(z=="Eliminar"){
		  y.Borrar(request.parameters.radios);
		  commands.sendRedirect("./index.html");
		  }
	
		  if(z=="Editar"){
		  y.valPOSICION(request.parameters.radios);
		  commands.sendRedirect("./editar.html");
		  }
		  if(z=="Salir"){
		  commands.sendRedirect("./index.html");
		  }
		  if(z=="Guardar en Archivo"){
		  y.GuardarCambio();
		  commands.sendRedirect("./index.html");
		  }
		 

})