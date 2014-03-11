function ask(question, format, callback) {
 var stdin = process.stdin, stdout = process.stdout;
 
 stdin.resume();
 stdout.write(question + ": ");
 
 stdin.once('data', function(data) {
   data = data.toString().trim();
 
   if (format.test(data)) {
     callback(data);
   }
 });
}
ask("Nombre", /.+/, function(nombre) {
  ask("Edad", /.+/, function(edad) {
    ask("Carrera", /.+/, function(carrera) {
      ask("Semestre", /.+/, function(semestre) {
        ask("Numero de control", /.+/, function(numero) {
	  console.log(" ");
          console.log("Nombre: ", nombre);
          console.log("Edad : ", edad);
          console.log("Carrera :", carrera);
          console.log("Semestre :", semestre);
          console.log("Numero de control :", numero);
    process.exit();
  });
});
});
});
});