  var fs= require ("fs");
  var entidad = require ("./Entidad.js");
  var datos = new entidad();
  var arreglo= require ("./Array.js");
  var objarray= new arreglo();
  var flag="1";
  var dato = {};
  
 var Vista = function (){
 if(flag=="1"){
   Vista.prototype.CargarArreglo();
   flag="0";
  }
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

	 var contenido = ["<tr><th>Clave</th><th>Nombre</th><th>Modulos</th><th>Creditos</th><th>Periodo</th></tr>" ];
      
	 for(var i=0; i< objarray.getobjARREGLO().length; i++){ 
	  
	  contenido.push('<tr><td>'+objarray.getobjARREGLO()[i]["Clave"]+
					'</td><td>'+objarray.getobjARREGLO()[i]["Nombre"]+
					'</td><td>'+objarray.getobjARREGLO()[i]["Modulos"]+
					'</td><td>'+objarray.getobjARREGLO()[i]["Creditos"]+
					'</td><td>'+objarray.getobjARREGLO()[i]["Periodo"]+
					'</td></tr>');
	 }
	 var cadena='<html>'+'<table border="1">'+
				contenido.join(" ")+
				'</table></html>';
     return cadena;

  }
  
  Vista.prototype.Capturar = function(valClave,valNombre,valModulos,valCreditos,valPeriodo){
  
  datos.setClave(valClave);
  datos.setNombre(valNombre);
  datos.setModulos(valModulos);
  datos.setCreditos(valCreditos);
  datos.setPeriodo(valPeriodo);
  
  dato["Clave"] = datos.getClave();
  dato["Nombre"] = datos.getNombre();
  dato["Modulos"] = datos.getModulos();
  dato["Creditos"] = datos.getCreditos();
  dato["Periodo"] = datos.getPeriodo();

  var R=JSON.stringify([dato]);
  
  objarray.setobjARREGLO(eval(R)); 

}

  Vista.prototype.Editar = function(){
     Vista.prototype.cargarARCHIVO();
	 var cadena =
    '<FORM method=post action="capturar.jssp">'+
	'FORMULARIO PARA EDITAR<br/>Clave :<INPUT type=text name="txtCLAVE" value="'+datos.getClave()+'"/>'+
	'<br/>Nombre :<INPUT type=text name="txtNOMBRE" value="'+datos.getNombre()+'"/>'+
	'<br/>Modulo :<INPUT type=text name="txtMODULOS" value="'+datos.getModulos()+'"/>'+
	'<br/>Creditos :<INPUT type=text name="txtCREDITOS" value="'+datos.getCreditos()+'"/>'+
	'<br/>Periodo :<INPUT type=text name="txtPERIODO" value="'+datos.getPeriodo()+'"/>'+
	'<br/><INPUT name="btnINDICADOR" type="submit" value="Guardar" />'+
    '</FORM>';  
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
  
  Vista.prototype.CargarArreglo= function(){
  var numLINEAS = fs.readFileSync('./archivo.csv').toString().split('\n').length;
          //ciclo para leer linea individualmente
		  for(var x=0;  x < numLINEAS ; x++){
		    var array = fs.readFileSync('./archivo.csv').toString().split('\n');
			var txtLINEA=array[x].split(',');
			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var j=0; j<5; j++){
                	
					
					if(j===0){
					datos.setClave(txtLINEA[j]);
					}
					else if(j===1){
					datos.setNombre(txtLINEA[j]);
					}
					else if(j===2){
					datos.setModulos(txtLINEA[j]);
					}
					else if(j===3){
					datos.setCreditos(txtLINEA[j]);
					}
					else if(j===4){	
					datos.setPeriodo(txtLINEA[j]);
					}
				}
				
				

dato["Clave"] = datos.getClave();
dato["Nombre"] = datos.getNombre();
dato["Modulos"] = datos.getModulos();
dato["Creditos"] = datos.getCreditos();
dato["Periodo"] = datos.getPeriodo();

var R=JSON.stringify([dato]);

objarray.setobjARREGLO(eval(R));

	        //objarray.setobjARREGLO(datos.getClave(),datos.getNombre(),datos.getModulos(),datos.getCreditos(),datos.getPeriodo());	  
		  }
		  
  }
  module.exports.Vista = Vista;
