sys = require('sys');

exports.arrayToString = function(arr){
	var output = "";
	for (property in arr)

		output += property + ': ' + arr[property]+'; '+'<br/>';

	return output;

}

