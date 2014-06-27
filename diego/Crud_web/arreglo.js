var array=[];
var insertar=function(objeto){
	array.push(objeto);
	//console.log("nuevotamaño"+array.length)
	//console.log(array[0].getNumero());
	return array;
}
var modificar=function(indice,objeto){
	array[indice]=objeto;
	return array;
}
var eliminar=function(indice){
	delete array[indice];
	return array;
}
var getArray=function(){
	return array;
}
module.exports.insertar = insertar;
module.exports.getArray= getArray;
module.exports.eliminar=eliminar;