(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("%3CHTML%3E%0D%0A");
commands.writeEscapedText("%09%09");commands.write("<head><title>Buscar</title></head>");commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%09%3CBODY%20bgcolor%3D%22%2301DF74%22%3E%0D%0A");
commands.writeEscapedText("%09%09");
		  var x= lib.Vista;
		  var y=new x.Vista();
		commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%09%09%0D%0A");
commands.writeEscapedText("%09%09");commands.write(y.Busqueda(request.parameters.txtVALOR));commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%09%20%20%20%20%0D%0A");
commands.writeEscapedText("%09%09%3CFORM%20action%3D%22index.html%22%3E%0D%0A");
commands.writeEscapedText("%09%09%3CINPUT%20name%3D%22btnINDICADOR%22%20type%3D%22submit%22%20value%3D%22Regresar%22%20%20%20/%3E%0D%0A");
commands.writeEscapedText("%09%09%3C/form%3E%0D%0A");
commands.writeEscapedText("%09%3C/BODY%3E%0D%0A");
commands.writeEscapedText("%3C/HTML%3E%0A");
})