
var Arreglo ={

   EntArray: []
};
 
 var array = function (){

}

array.prototype.setArray = function(datos){


 Arreglo.EntArray.push({"Numero": datos[0].Numero,"Nombre": datos[0].Nombre, "Tipo": datos[0].Tipo, "Recurso": datos[0].Recurso,  "Tiempo": datos[0].Tiempo, "Materia": datos[0].Materia, "TuDato": datos[0].TuDato});

console.log("Datos en el arreglo: " + JSON.stringify(Arreglo.EntArray));
console.log("numero de datos en el arreglo: " + Arreglo.EntArray.length);

}

array.prototype.mostrar = function(){

	return Arreglo.EntArray;

	 }
	 
array.prototype.CambiarDatosLinea =function (nombre,tipo,recurso,tiempo,materia,linea,ne){
  
  //Arreglo.EntArray[linea].Numero = (cont+1);
  Arreglo.EntArray[linea].Nombre = nombre;
  Arreglo.EntArray[linea].Tipo = tipo;
  Arreglo.EntArray[linea].Recurso= recurso;
  Arreglo.EntArray[linea].Tiempo = tiempo;
  Arreglo.EntArray[linea].Materia = materia;
  Arreglo.EntArray[linea].TuDato = ne;
  
  }
 
 array.prototype.EliminarFila = function (linea){
  
  Arreglo.EntArray.splice(linea,1);

}

module.exports = array;