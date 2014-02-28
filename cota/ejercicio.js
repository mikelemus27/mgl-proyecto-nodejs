function ask(question, format, callback) {
 var stdin = process.stdin, stdout = process.stdout;
 
 stdin.resume();
 stdout.write(question + ": ");
 
 stdin.once('data', function(data) {
   data = data.toString().trim();
 
   if (format.test(data)) {
     callback(data);
   } 
else {
     stdout.write("dato erroneo, ingresa bien tus datos: "+ format +"\n");
     ask(question, format, callback);
   }
  });
}
ask("Nombre", /.+/, function(nombre) {
 ask("Apellidos", /.+/, function(apellido) {
  ask("Correo", /^.+@.+$/, function(correo) {
 ask("Telefono", /.+/, function(tel) {
 ask("Materia", /.+/, function(materia) {
console.log("");
  console.log("Datos Almacenados");
console.log("");
    console.log("Tu nombre es: ", nombre);
    console.log("Tu apellido es: ", apellido);
    console.log("Tu correo es:", correo);
    console.log("Tu telefono es:", tel);
    console.log("Su Materia: ", materia);
 
    process.exit();
  });
});
});
});
});