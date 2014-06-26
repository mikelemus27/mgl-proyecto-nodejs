(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText(""); 
		  var z=request.parameters.button;
		  var x= lib.VistaControlCarrera;
		  var y=new x.VistaControlCarrera();
		  
		  if(z=="Guardar"){
		  y.Modificar(request.parameters.carrera,request.parameters.creditos,request.parameters.clave,request.parameters.area,request.parameters.tipo);
		  commands.sendRedirect("./index.html");
		  }
		  if(z=="Eliminar"){
		  y.Eliminar(request.parameters.radios);
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
		  y.saveCambios();
		  commands.sendRedirect("./index.html");
		  }
		 

})