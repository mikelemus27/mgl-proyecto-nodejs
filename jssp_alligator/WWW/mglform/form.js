(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText(""); 
var debug=false;
var p1=request.parameters.num1;
 var p2=request.parameters.num2;
 if (debug == true) {
    console.log("form.jssp; param2="+ p1);
     console.log("form.jssp; param2="+ p2);
     commands.write("form.jssp; param1="+ p1);
     commands.write("form.jssp; param2="+ p2);
 }

commands.writeEscapedText("%3CHTML%3E%0A");
commands.writeEscapedText("%09%09");commands.write("<head><title>nodeJS and antiNode+</title></head>");
commands.writeEscapedText("%09%3CBODY%3E%0A");
commands.writeEscapedText("%3Cform%20action%3D%22form.jssp%22%20method%3D%22post%22%3E%0A");
commands.writeEscapedText("%20%20%20%20%3Cdiv%3E%0A");
commands.writeEscapedText("%20%20%20%20%20%20%20%20%3Clabel%20for%3D%22num1%22%3Enum1%3A%3C/label%3E%0A");
commands.writeEscapedText("%20%20%20%20%20%20%20%20%3Cinput%20name%3D%22num1%22%20type%3D%22text%22%20id%3D%22num1%22%20value%3D");commands.write( p1 !=undefined ? p1:0);commands.writeEscapedText("%20/%3E%0A");
commands.writeEscapedText("%20%20%20%20%3C/div%3E%0A");
commands.writeEscapedText("%20%20%20%20%3Cdiv%3E%0A");
commands.writeEscapedText("%20%20%20%20%20%20%20%20%3Clabel%20for%3D%22num2%22%3Enum2%3A%3C/label%3E%0A");
commands.writeEscapedText("%20%20%20%20%20%20%20%20%3Cinput%20%20name%3D%22num2%22%20type%3D%22text%22%20id%3D%22num2%22%20value%3D");commands.write( p2 != undefined ? p2:0);commands.writeEscapedText("%20/%3E%0A");
commands.writeEscapedText("%20%20%20%20%3C/div%3E%0A");
commands.writeEscapedText("%20%20%20%20%3Cdiv%3E%0A");
commands.writeEscapedText("%20%20%20%20%20%20%20%20%3Clabel%20for%3D%22result%22%3Eresult%3A%3C/label%3E%0A");
commands.writeEscapedText("%20%20%20%20%20%20%0A");
commands.writeEscapedText("%20%20%20%20%20%20");commands.write(lib.suma.sumar(p1,p2));commands.writeEscapedText("%20%0A");
commands.writeEscapedText("%20%20%20%20%3C/div%3E%0A");
commands.writeEscapedText("%20%20%3Cinput%20type%3D%22submit%22%20value%3D%22Go%20to%20my%20link%20location%22%20%3E%3C/input%3E%0A");
commands.writeEscapedText("%3C/form%3E%0A");
commands.writeEscapedText("%09%3C/BODY%3E%0A");
commands.writeEscapedText("%3C/HTML%3E%0A");
})