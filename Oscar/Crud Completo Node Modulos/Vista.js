  var fs= require ("fs");
  var entidad = require ("./Entidad.js");
  var datos = new entidad();
  
  var Vista = function (){
 
  }
  
  Vista.prototype.cargarARCHIVO = function(){
  
		var numLINEAS = fs.readFileSync('./archivo.csv').toString().split('\n').length;
          //ciclo para leer linea individualmente
		  for(var x=0;  x < numLINEAS ; x++){
	
		    var array = fs.readFileSync('./archivo.csv').toString().split('\n');
			var txtLINEA=array[x].split(',');
			
			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var j=0; j<5; j++){
			     	

					
					if(j===0){
					var valCVE=txtLINEA[j];
					datos.setClave(valCVE);
					}
					else if(j===1){
					var valNBR=txtLINEA[j];
					datos.setNombre(valNBR);
					}
					else if(j===2){
					var valMOD=txtLINEA[j];
					datos.setModulos(valMOD);
					}
					else if(j===3){
					var valCRE=txtLINEA[j];
					datos.setCreditos(valCRE);
					}
					else if(j===4){
					var valPER=txtLINEA[j];
					datos.setPeriodo(valPER);
					}
					
				}
		
		  
		  }
		 
  }
  
  Vista.prototype.Mostrar = function (){
    Vista.prototype.cargarARCHIVO();
               
	 var cadena='<html>'+
	 '<FORM method=post action="http://127.0.0.1:8888/servidor.js">'+
	'Clave : <label>'+datos.getClave()+'</label> <br/>'+
	'Nombre : <label>'+datos.getNombre()+'</label> <br/>'+
	'Modulos : <label>'+datos.getModulos()+'</label> <br/>'+
	'Creditos : <label>'+datos.getCreditos()+'</label> <br/>'+
	'Periodo : <label>'+datos.getPeriodo()+'</label> <br/>'+
	'<INPUT name="btnINDICADOR" type="submit" value="Terminado" />'+
    '</FORM>'+'</html>';		
     return cadena;
  
  }
  
  Vista.prototype.Capturar = function(valClave,valNombre,valModulos,valCreditos,valPeriodo){
  
  datos.setClave(valClave);
  datos.setNombre(valNombre);
  datos.setModulos(valModulos);
  datos.setCreditos(valCreditos);
  datos.setPeriodo(valPeriodo);
  
  var valor= Vista.prototype.Cadena();
	  fs.writeFile("./archivo.csv", valor);

}

  Vista.prototype.Editar = function(){
     Vista.prototype.cargarARCHIVO();
	 var cadena ='<html>'+
	'<FORM method=post action="http://127.0.0.1:8888/servidor.js">'+
	'FORMULARIO PARA EDITAR<br/>Clave :<INPUT type=text name="txtCLAVE" value="'+datos.getClave()+'"/>'+
	'<br/>Nombre :<INPUT type=text name="txtNOMBRE" value="'+datos.getNombre()+'"/>'+
	'<br/>Modulo :<INPUT type=text name="txtMODULOS" value="'+datos.getModulos()+'"/>'+
	'<br/>Creditos :<INPUT type=text name="txtCREDITOS" value="'+datos.getCreditos()+'"/>'+
	'<br/>Periodo :<INPUT type=text name="txtPERIODO" value="'+datos.getPeriodo()+'"/>'+
	'<br/><INPUT name="btnINDICADOR" type="submit" value="Guardar" />'+
    '</FORM>'+'</html>';  
	return cadena;
  }

  Vista.prototype.Cadena = function(){
   var x=datos.getClave()+","+datos.getNombre()+","+datos.getModulos()+","+datos.getCreditos()+","+datos.getPeriodo();
   return x;
  }
  
  Vista.prototype.Busqueda= function(valA,valB){
    Vista.prototype.cargarARCHIVO();
	var texto="";
    if(valA==="1"){
	 if(valB===datos.getClave()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	else if(valA==="2"){
	 if(valB===datos.getNombre()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	else if(valA==="3"){
	 if(valB===datos.getModulos()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	else if(valA==="4"){
	 if(valB===datos.getCreditos()){
	 texto="Si se encontro";
	 }
	 else{
	texto="No se encontro";
	 }
	}
	else if(valA==="5"){ 
	if(valB===datos.getPeriodo()){
	 texto="Si se encontro";
	 }
	 else{
	 texto="No se encontro";
	 }
	}
	
  return texto;
	
  }
 module.exports = Vista;

