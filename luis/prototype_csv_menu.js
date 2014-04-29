var fs = require('fs');//declaramos como semi global la libreria para leer y escribir archivos de texto

function leerarchivo(){//funcion para leer el archivo csv
var fs = require('fs');
var data = fs.readFileSync('./base.csv', 'utf8');
// wait for the result, then use it
console.log(data);
var fs = require('fs');
accionhacer();

}//fin de leer archivo csv

function escribirarchivo(a,b,c,d,e){//funcion para leer el archivo csv
fs.writeFile('./base.csv',a+b+c+d+e, function (err) {
  if (err) throw err;
  console.log('Se han guardado los datos!!');
});
}//Fin de escribir archivo csv


var modulo = modulo || {};		//grupo del modulo principal

function accion(pregunta, formato, dato) {
 var stdin = process.stdin, stdout = process.stdout;		//libreria para poder leer y mostrar datos

 stdin.resume();
 stdout.write(pregunta + ": ");

 stdin.once('data', function(data) {
   data = data.toString().trim();

   if (formato.test(data)) {
     dato(data);
   } 
else {
     stdout.write("It should match: "+ formato +"\n");
     intro(pregunta, formato, dato);
   }
 });
}
 
 
function intro(pregunta, formato, dato) {
 var stdin = process.stdin, stdout = process.stdout;

 stdin.resume();
 stdout.write(pregunta + ": ");

 stdin.once('data', function(data) {
   data = data.toString().trim();

   if (formato.test(data)) {
     dato(data);
   } 
else {
     stdout.write("el formato para introducir tu dato no coincide con el estipulado: "+ formato +"\n");
     intro(pregunta, formato, dato);
   }
 });
};


function eliminar(){
	   
    gruposfin.setgrupoAct("valor Null");
    gruposfin.setnombrealum("valor Null"); 
	gruposfin.setintegr("valor Null"); 
	gruposfin.setactiv("valor Null"); 
    gruposfin.setcarrera("valor Null"); 
	
	}
(function(){
    // Constructor
    function grupos( grupo, nombrealum, integr, activ, carrera){
    this._grupo = grupo; // convirtiendo las variables a privadas usando ._
    this._nombrealum = nombrealum;
	this._integr = integr;
	this._activ = activ;
	this._carrera = carrera;
  }
    
  // declaranto el tipo de objeto como prototype
  grupos.prototype.setgrupoAct = function(grupo){
    // implementacion del metodo set y get para su funcionamiento posterior
    if (typeof grupo === "undefined"){
      return this._grupo ;
    }else{
      this._grupo = grupo;
     }}
      grupos.prototype.getgrupoAct = function (){
      return this._grupo;
      }  
     
  grupos.prototype.setnombrealum = function(nombrealum){ 
  if (typeof nombrealum === "undefined"){
      return this._nombrealum ;
  }else{
      this._nombrealum = nombrealum;
  }}//fin de prototype nombrealum
  grupos.prototype.getnombrealum = function(){
  return this._nombrealum;
  }
  
  grupos.prototype.setintegr = function(integr){
  if (typeof integr === "undefined"){
     return this._integr ;
  }else{
      this._integr = integr;
  }}
  grupos.prototype.getintegr = function(){
  return this._integr;
  }
  
  grupos.prototype.setactiv = function(activ){
  if (typeof activ === "undefined"){
     return this._activ;
  }else{
     this._activ = activ;
    }} 
  grupos.prototype.getactiv = function(){
  return this._activ;
  }
  
  grupos.prototype.setcarrera = function(carrera){
  if (typeof carrera === "undefined"){
      return this._carrera;
  }else{
      this._carrera = carrera;
  }}
  grupos.prototype.getcarrera = function(){
  return this._carrera;
  }
  
    // relacionar modulo con grupos
  modulo.grupos = grupos;//se exporta la clase a global de ser privada
  })(); //se inicialisan todas la variables y clases de aqui para abajo

function accionhacer(){ //se muestra el menu para decidir la accion a seguir
 console.log("a) ver datos: mostrar los datos contenidos en el objeto entidad ");
  console.log("b) modificar datos: modificar lo valores del objeto entidad ");
   console.log("c) eliminar datos: simplemente   modifica los valores del objeto entidad por  unvalor  por default totalmente inuti");
    console.log("d) guardar en archivo: copia los datos del objeto entidad en el archivo csv. ");
	 console.log("e) salir: salir del sistema");
accion("Que quieres hacer?? (Mostrar o Guardar o ver guardados)\n", /.+/, function(proces) {
 if(proces =="b"){
 pedirdatos(); 	  //se manda a pedir la funcion
 }else{
 if(proces=="mostrar"){
 MostrarDatos();	//se manda a pedir la funcion
 }else
	 if(proces =="c"){
 eliminar(); 	  //se manda a pedir la funcion
 accionhacer()
 }else
	 if(proces =="e"){
process.exit(1); 	  //se manda a pedir la funcion
 }else
	 if(proces =="d"){
escribirarchivo(gruposfin.getgrupoAct(),gruposfin.getnombrealum(),gruposfin.getintegr(),gruposfin.getactiv(),gruposfin.getcarrera()); 	  //se manda a pedir la funcion
 accionhacer()
 }else{
	 if(proces =="a"){
 leerarchivo(); 	  //se manda a pedir la funcion
 }else{
 console.log("Error no se tiene la opcion el programa se finalizara por seguridad ", proces);
 
 } } } } );
 }

   function nuevafuncion(){
   intro("Quieres otra funcion (s)", /.+/, function(nueva) {
   if (nueva == "s" ){
   accionhacer();
   }else{
   
   } } );
   }

	var gruposfin = new modulo.grupos();
 	function pedirdatos(datos){
    intro("Nombre del grupo ", /.+/, function(grupo) {
    gruposfin.setgrupoAct(grupo);
    intro("Tu nombre es ", /.+/, function(nombrealum) {
    gruposfin.setnombrealum(nombrealum); 
	intro("integrante numero: ", /.+/, function(integr) {
    gruposfin.setintegr(integr); 
	intro("Actividad del grupo", /.+/, function(activ) {
    gruposfin.setactiv(activ); 
    intro("Que carrera eres: ", /.+/, function(carrera) {
    gruposfin.setcarrera(carrera); 
   //se guardan los datos en el archivo csv de manera automatica
   escribirarchivo(gruposfin.getgrupoAct(),gruposfin.getnombrealum(),gruposfin.getintegr(),gruposfin.getactiv(),gruposfin.getcarrera());
   
  
   
   
	nuevafuncion();
});	});	}); }); }); }

	   function MostrarDatos(datos){
	   //se mandan a llamar los datos almacenados en las variables asignadas con ._
       gruposfin.getgrupoAct();
	   gruposfin.getnombrealum();
	   gruposfin.getintegr();
	   gruposfin.getactiv();
	   gruposfin.getcarrera();
	   
	   //imprimimos los datos en pantalla
       console.log("Estas en el grupo: " + gruposfin.getgrupoAct() );
	   console.log("Tu nombre es: " + gruposfin.getnombrealum() );
	   console.log("Eres el integrante numero: " + gruposfin.getintegr() );
	   console.log("La actividad es: " + gruposfin.getactiv());
	   console.log("Estudias la carrera: " + gruposfin.getcarrera());
	   
	nuevafuncion();
}
//al final se pregunta si se decea gacer algo mas
accionhacer();