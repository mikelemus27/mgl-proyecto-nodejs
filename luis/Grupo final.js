function ask(question, format, callback) {
 var stdin = process.stdin, stdout = process.stdout;
 
 stdin.resume();
 stdout.write(question + ": ");
 
 stdin.once('data', function(data) {
   data = data.toString().trim();
 
   if (format.test(data)) {
     callback(data);
   } else {
     stdout.write("It should match: "+ format +"\n");
     ask(question, format, callback);
   }
 });
}


ask("nombre del grupo", /.+/, function(grupo) {
  ask("numero de integrante", /.+/, function(num) {
      ask("nombre", /.+/, function(nombre) {
          ask("actividad", /.+/, function(act) {
              ask("ubicacion", /.+/, function(ubic) {

console.log("tu grupo es: ", grupo);
console.log("eres el numero:", num);
console.log("tu nombre es: ", nombre);
console.log("la actividad es: ", act);
console.log("tu ubicacion es: ", ubic);
    process.exit();
  });});});});});
