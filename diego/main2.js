process.stdin.setEncoding('utf8');

process.stdin.on('readable', function(chunk){
  var nombre = process.stdin.read("nombre");
  var edad = process.stdin.read("edad: ");
  console.log("nombre",nombre);
  });