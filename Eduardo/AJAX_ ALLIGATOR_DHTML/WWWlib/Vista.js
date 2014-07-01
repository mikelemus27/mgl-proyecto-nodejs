  var fs= require ("fs");
  var entidad = require ("./Entidad.js");
  var temario1 = new entidad();
  
  var array = require("./ArregloTemario.js");
  var objArray = new array();
  var bandera = "1";
  var elemento = {};
  var pos = "-1";
  
  
  var Vista = function (){
	if (bandera=="1"){
		Vista.prototype.CargarArreglo();
		bandera="0";
	}
 
  }
  
    Vista.prototype.GuardarCambio = function(){
	
 var contenedor = fs.createWriteStream("archivo.csv");
 
	 contenedor.once('open', function(func) {
			
			for(var i=0; i < objArray.getobjARRAY().length; i++){
			
				if(objArray.getobjARRAY().length-1== i ){
				 contenedor.write(objArray.getobjARRAY()[i]["Tema"]+','+
						 objArray.getobjARRAY()[i]["Subtemas"]+','+
						 objArray.getobjARRAY()[i]["Unidades"]+','+
						 objArray.getobjARRAY()[i]["OG"]+','+
						 objArray.getobjARRAY()[i]["Bibliografia"]+'\r');
				}
				else{
				
				contenedor.write(objArray.getobjARRAY()[i]["Tema"]+','+
						 objArray.getobjARRAY()[i]["Subtemas"]+','+
						 objArray.getobjARRAY()[i]["Unidades"]+','+
						 objArray.getobjARRAY()[i]["OG"]+','+
						 objArray.getobjARRAY()[i]["Bibliografia"]+'\n');
				}
			}
	 
	
      contenedor.end();
		});
		
		return JSON.stringify(objArray.getobjARRAY());
  } 
  
  Vista.prototype.CargarArreglo= function(){
  
		var numLINEAS = fs.readFileSync('./archivo.csv').toString().split('\n').length;
          //ciclo para leer linea individualmente
		  for(var x=0;  x < numLINEAS ; x++){
	
		    var array = fs.readFileSync('./archivo.csv').toString().split('\n');
			var txtLINEA=array[x].split(',');
			
			//ahora palabra por palabra para insertarlas en el array del modelo de la entidad
				for(var i=0; i<5; i++){
			     	

					
					if(i===0){
					temario1.setTema(txtLINEA[i]);
					}
					else if(i===1){
					temario1.setSubtemas(txtLINEA[i]);
					}
					else if(i===2){
					temario1.setUnidades(txtLINEA[i]);
					}
					else if(i===3){
					temario1.setObjG(txtLINEA[i]);
					}
					else if(i===4){
					temario1.setBibliografia(txtLINEA[i]);
					}
					
				}
			
			 elemento["Tema"] = temario1.getTema();
			 elemento["Subtemas"] = temario1.getSubtemas();
			 elemento["Unidades"] = temario1.getUnidades();
			 elemento["OG"] = temario1.getObjG();
			 elemento["Bibliografia"] = temario1.getBibliografia();

			 var R=JSON.stringify([elemento]);
  
			 objArray.setobjARRAY(eval(R)); 
				
		
		  
		  }
		 
  }
  
  Vista.prototype.Mostrar = function (){
	
	return JSON.stringify(objArray.getobjARRAY());
  
  }
  
  Vista.prototype.Pedirdatos = function(tema,subtemas,unidades,OG,bibliografia){
  
  temario1.setTema(tema);
  temario1.setSubtemas(subtemas);
  temario1.setUnidades(unidades);
  temario1.setObjG(OG);
  temario1.setBibliografia(bibliografia);
  
  elemento["Tema"] = temario1.getTema();
  elemento["Subtemas"] = temario1.getSubtemas();
  elemento["Unidades"] = temario1.getUnidades();
  elemento["OG"] = temario1.getObjG();
  elemento["Bibliografia"] = temario1.getBibliografia();

  var R=JSON.stringify([elemento]);
  
  objArray.setobjARRAY(eval(R));
  
  return JSON.stringify(objArray.getobjARRAY());

}

  Vista.prototype.Modificar = function(val1,val2,val3,val4,val5){
    objArray.Cambiar(val1,val2,val3,val4,val5,pos);
	 return JSON.stringify(objArray.getobjARRAY());
  }
  
  Vista.prototype.Borrar= function(val){
  objArray.Borrar(val);
   return JSON.stringify(objArray.getobjARRAY());
  }

  
    Vista.prototype.Busqueda= function(dato){
	var texto="null";
	
		for(var i=0; i < objArray.getobjARRAY().length; i++){
					if(objArray.getobjARRAY()[i] == dato){
						texto="Si se encontro";
						break;
					}
					else{
						texto="no se encontro";
					}
			}
			
		
		  
		  return texto;
		  }
		  
		Vista.prototype.valPos= function (val){
			pos=val;
		}
  
  
 module.exports.Vista = Vista;
 