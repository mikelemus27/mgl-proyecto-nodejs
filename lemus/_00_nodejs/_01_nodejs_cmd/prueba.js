console.log("hola  mundo");
// stdin_test.js

var stdin = process.openStdin();
function f1(){console.log("Mostrando datos ");console.log("Dato1: " + dato1);
process.exit();
}

 
var dato1="";
var dato2="";
var dato3="";
//for (var i=0;i<5;i++){
stdin.on('data', function(chunk) { 
dato1=chunk;
console.log("Got data: " + chunk); 
f1();
});

