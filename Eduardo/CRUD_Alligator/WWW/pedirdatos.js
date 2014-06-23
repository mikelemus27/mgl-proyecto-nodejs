(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("%3CHTML%3E%0D%0A");
commands.writeEscapedText("%09%09");commands.write("<head><title>Validar Valor</title></head>");commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%09%3CBODY%20bgcolor%3D%22green%22%3E%0D%0A");
commands.writeEscapedText("%20%0D%0A");
commands.writeEscapedText("%09%09");
		  var x= lib.Vista;
		  var y=new x.Vista();
		commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%09%0D%0A");
commands.writeEscapedText("%09%09");commands.write(y.Pedirdatos(request.parameters.txtTema,request.parameters.txtSubtemas,request.parameters.txtUnidades,request.parameters.txtOG,request.parameters.txtBibliografia));commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%20%20%20%20%20%20%20%20%20"); commands.sendRedirect("./index.html");commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%20%0D%0A");
commands.writeEscapedText("%20%0D%0A");
commands.writeEscapedText("%09%3C/BODY%3E%0D%0A");
commands.writeEscapedText("%3C/HTML%3E%0A");
})