var readline = require('readline');
function mostrar(data){

	  console.log('You just typed: '+data);
}
var rl = readline.createInterface({
	  input: process.stdin,
      output: process.stdout,
      terminal: false
});

rl.on('line', function (cmd) {
mostrar(cmd)
rl.on('line', function (cmd) {
console.log("saliendi");
process.exit();

});
});

