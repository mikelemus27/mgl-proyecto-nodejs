// try to always scope your API, Object Types, properties in a namespace   

var mymodule = mymodule || {};
var pedir = pedir ||{}; 




function proceso(question, format, callback) {
 var stdin = process.stdin, stdout = process.stdout;

 stdin.resume();
 stdout.write(question + ": ");

 stdin.once('data', function(data) {
   data = data.toString().trim();

   if (format.test(data)) {
     callback(data);
   } 
else {
     stdout.write("It should match: "+ format +"\n");
     ask(question, format, callback);
   }
 });
}

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
     stdout.write("It should match: "+ format +"\n");
     ask(question, format, callback);
   }
 });
}


;(function(){
  
  
  // Constructor
  function Actividadnombre( nombre){
    this._nombre = nombre; // as convention, ._*** is for privates properties
    // Note: there is a more robust way to do do private, but this will be for later
   this._nombre = nombre;
  }
  
  
  // A ObjectType Method
  Actividadnombre.prototype.nombre = function(nombre){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof nombre === "undefined"){
      return this._nombre ;
    }else{
      this._nombre = nombre;
     }


 }
 
 // Constructor
  function Acttipo(tipo){
    this._tipo = tipo; // as convention, ._*** is for privates properties
    // Note: there is a more robust way to do do private, but this will be for later
   //this._edad = edad;
   this._tipo = tipo;
  }//fin de funcion contructor tipo
  
  
  // A ObjectType Method
  Acttipo.prototype.tipo = function(tipo){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof tipo === "undefined"){
      return this._tipo ;
    }else{
      this._tipo = tipo;
     }
 }//fin de prototype tipo
  
 // Constructor duracion
  function ActividadDuracion(tiempo){
    this._tiempo = tiempo; // as convention, ._*** is for privates properties
    // Note: there is a more robust way to do do private, but this will be for later
   //this._edad = edad;
   this._tiempo = tiempo;
  }//fin de funcion contructor tipo
  
  //3221115857
  // A ObjectType Method
  ActividadDuracion.prototype.tiempo = function(tiempo){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof tiempo === "undefined"){
      return this._tiempo ;
    }else{
      this._tiempo = tiempo;
     }
 }//fin de prototype tiempo
 
 
 // Constructor recursos
  function ActividadRecursos(recurso){
    this._recurso = recurso; // as convention, ._*** is for privates properties
    // Note: there is a more robust way to do do private, but this will be for later
   this._recurso = recurso;
  }//fin de funcion contructor recurso
  
  
  // A ObjectType Method
  ActividadRecursos.prototype.recurso = function(recurso){
    // Note: here, we use the js/jQuery style, setter/getter in one method
    if (typeof recurso === "undefined"){
      return this._recurso;
    }else{
      this._recurso = recurso;
     }
 }//fin de prototype recurso
 
  
  // mymodule namespace
  mymodule.Actividadnombre = Actividadnombre;
  mymodule.Acttipo = Acttipo;
  mymodule.ActividadDuracion = ActividadDuracion;
  mymodule.ActividadRecursos = ActividadRecursos;
})(); 

function Procesohacer(){
proceso("Que proceso quieres", /.+/, function(proces) {
 
 if(proces =="Guardar"){
 //console.log("Es la opcion correcta", proces);
 pedirdatos();
 
 
 }
 else{
 
 if(proces=="Mostrar"){
 
 MostrarDatos();
 
 }else{
 
 console.log("Error no se tiene la opcion: ", proces);
 
 process.exit();
 }
}
//process.exit();
});
}

function pedirdatos(datos){
     ask("Nombre de la Actividad", /.+/, function(nombre) {
       var nomActividad = new mymodule.Actividadnombre(nombre);
         ask("Tipo de Actividad (Grupo o Individual)", /.+/, function(tipo) {
          var tipoActividad = new mymodule.Acttipo(tipo);
		    ask("Duracion de la Actividad", /.+/, function(tiempo) {
             var Actduracion = new mymodule.ActividadDuracion(tiempo);
		      ask("Recursos para la Actividad", /.+/, function(recurso) {
               var ActRecurso = new mymodule.ActividadRecursos(recurso);
		
		
    //console.log("La actividad es:" , nomActividad.nombre());
     //   console.log("Tipo de Actividad:" , tipoActividad.tipo() );
       //   console.log("Duracion de la Actividad:" , Actduracion.tiempo());
		 //    console.log("Recursos para la Actividad:" , ActRecurso.recurso() );
//process.exit();

pedir.nomActividad = pedir;

ask("Quieres otra funcion",/.+/, function(nueva) {

if (nueva == "s"){
//console.log("Que actividad quires");
Procesohacer();
}else{
process.exit();
}
});

      });
     });
    });
   });
//proceso();
}

var nomActividad = new mymodule.Actividadnombre();
         
          var tipoActividad = new mymodule.Acttipo();
		   
             var Actduracion = new mymodule.ActividadDuracion();
		      
               var ActRecurso = new mymodule.ActividadRecursos();
			   
			   
function MostrarDatos(datos){

//proces procesos = new proces();
 
 
console.log("La actividad es:" , nomActividad);

}
Procesohacer();






