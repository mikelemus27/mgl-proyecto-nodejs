(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText(""); 
		  var z=request.parameters.btnINDICADOR;
		  var x= lib.Vista;
		  var y=new x.Vista();
		  
		  if(z=="Guardar"){
		  y.Modificar(request.parameters.txtTema,request.parameters.txtSubtemas,request.parameters.txtUnidades,request.parameters.txtOG,request.parameters.txtBibliografia);
		  commands.sendRedirect("./index.html");
		  }
		  if(z=="Eliminar"){
		  y.Borrar(request.parameters.radios);
		  commands.sendRedirect("./index.html");
		  }
	
		  if(z=="Editar"){
		  y.valPos(request.parameters.radios);
		  commands.sendRedirect("./Editar.html");
		  }
		  if(z=="Salir"){
		  commands.sendRedirect("./index.html");
		  }
		  if(z=="Guardar en Archivo"){
		  y.GuardarCambio();
		  commands.sendRedirect("./index.html");
		  }
		 

})