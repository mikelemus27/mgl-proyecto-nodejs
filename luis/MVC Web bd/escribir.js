function escribir(resultado){
fs= require ("fs");
var outputFilename = 'base.csv';
fs.writeFile(outputFilename, resultado, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
	  
    }
}

module.exports = escribir;