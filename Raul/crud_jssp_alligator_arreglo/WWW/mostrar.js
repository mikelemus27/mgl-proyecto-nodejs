(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("%3CHTML%3E%0D%0A");
commands.writeEscapedText("%09%09");commands.write("<head><title>Mostrar_Datos</title></head>");commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%09%3CBODY%20bgcolor%3D%22%23A9F5F2%22%3E%0D%0A");
commands.writeEscapedText("%20%0D%0A");
commands.writeEscapedText("%09%09");
		  var x= lib.Modulosprocesoshacer;
		  var y=new x.Modulosprocesoshacer();
		commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%09%09");commands.write(y.MostrarDatos());commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%09%20%20%20%20%0D%0A");
commands.writeEscapedText("%20%0D%0A");
commands.writeEscapedText("%09%3C/BODY%3E%0D%0A");
commands.writeEscapedText("%3C/HTML%3E%0A");
})