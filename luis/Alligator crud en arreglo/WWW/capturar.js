(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("%3CHTML%3E%0D%0A");
commands.writeEscapedText("%09%09");commands.write("<head><title>Validar Datos</title></head>");commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%09%3CBODY%20bgcolor%3D%22olive%22%3E%0D%0A");
commands.writeEscapedText("%20%0D%0A");
commands.writeEscapedText("%09%09");
		  var x= lib.VistaControlgrupo;
		  var y=new x.VistaControlgrupo();
		
		  y.Capturar(request.parameters.grupo,request.parameters.numero,request.parameters.nombre,request.parameters.actividad,request.parameters.ubicacion);
		commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%20%20%20%20%20%20%20%20%20"); commands.sendRedirect("./index.html");commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%20%0D%0A");
commands.writeEscapedText("%20%0D%0A");
commands.writeEscapedText("%09%3C/BODY%3E%0D%0A");
commands.writeEscapedText("%3C/HTML%3E%0A");
})