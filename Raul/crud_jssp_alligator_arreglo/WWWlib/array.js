
var Arreglo ={

   EntArray: []
};
 
 var array = function (){

}

array.prototype.setArray = function(datos){


 Arreglo.EntArray.push({"Numero": datos[0].Numero,"Nombre": datos[0].Nombre, "Tipo": datos[0].Tipo, "Recurso": datos[0].Recurso,  "Tiempo": datos[0].Tiempo, "Materia": datos[0].Materia});

console.log("Datos en el arreglo: " + JSON.stringify(Arreglo.EntArray));
console.log("Datos en el arreglo: " + Arreglo.EntArray.length);

}

array.prototype.mostrar = function(){

	return Arreglo.EntArray;

	 }
	 
array.prototype.CambiarDatosLinea =function (linea,nombre,tipo,recurso,tiempo,materia){
  
  Arreglo.EntArray[linea].Numero = linea;
  Arreglo.EntArray[linea].Nombre = nombre;
  Arreglo.EntArray[linea].Tipo = tipo;
  Arreglo.EntArray[linea].Recurso= recurso;
  Arreglo.EntArray[linea].Tiempo=tiempo;
  Arreglo.EntArray[linea].Materia=materia;
  
  }
 
 array.prototype.EliminarFila = function (linea){
  
  Arreglo.EntArray.splice(linea,1);

}

module.exports = array;