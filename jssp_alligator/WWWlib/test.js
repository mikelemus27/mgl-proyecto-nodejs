sys = require('sys');

exports.arrayToString = function(arr){
	var output = "";
	for (property in arr)
<<<<<<< HEAD
		output += property + ': ' + arr[property]+'; ';
=======
		output += property + ': ' + arr[property]+'; '+'<br/>';
>>>>>>> 43ec18bbb8cae71fc70a390ed2a0babe5043da5d
	return output;

}

