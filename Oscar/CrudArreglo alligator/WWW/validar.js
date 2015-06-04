(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("%3CHTML%3E%0A");
commands.writeEscapedText("%09%09");commands.write("<head><title>Validar Valor</title></head>");
commands.writeEscapedText("%09%3CBODY%20bgcolor%3D%22red%22%3E%0A");
commands.writeEscapedText("%09%09");commands.write(request.parameters.btnINDICADOR);
commands.writeEscapedText("%09%09");	if(request.parameters.btnINDICADOR == "Mostrar"){
commands.writeEscapedText("%09%09"); commands.sendRedirect("./mostrar.jssp");
commands.writeEscapedText("%09%09%0A");
commands.writeEscapedText("%09%09");}else if(request.parameters.btnINDICADOR == "Capturar"){
commands.writeEscapedText("%09%09"); commands.sendRedirect("./Capturar.html");
commands.writeEscapedText("%09%09%0A");
commands.writeEscapedText("%09%09");}else if(request.parameters.btnINDICADOR == "Terminar"){
commands.writeEscapedText("%09%09"); commands.sendRedirect("./index.html");
commands.writeEscapedText("%09%09%0A");
commands.writeEscapedText("%09%09");}else if(request.parameters.btnINDICADOR == "Buscar"){
commands.writeEscapedText("%09%09"); commands.sendRedirect("./Buscar.html");
commands.writeEscapedText("%09%09%0A");
commands.writeEscapedText("%20%20%20%20%20%20%20%20%20%0A");
commands.writeEscapedText("%09%0A");
commands.writeEscapedText("%09%09");}
commands.writeEscapedText("%09%3C/BODY%3E%0A");
commands.writeEscapedText("%3C/HTML%3E%0A");
})