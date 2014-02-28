var prompt = require('prompt');
prompt.start();

console.log("Bienvenido a Practica");

prompt.get(['Nombre', 'Apellido', 'Correo', 'Celular', 'Materia'], function (err, resultados){
console.log('Datos Recolectados');
console.log('	Nombre: ' + resultados.Nombre);
console.log('	Apellido: ' + resultados.Apellido);
console.log('	Correo: ' + resultados.Correo);
console.log('	Celular: ' + resultados.Celular);
console.log('	Materia: ' + resultados.Materia);
});