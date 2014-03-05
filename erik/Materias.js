function ask(question, format, callback) 
{
	var stdin = process.stdin, stdout = process.stdout;
 
	stdin.resume();
	stdout.write(question + ": ");
 
	stdin.once('data', function(data) 
		{
			data = data.toString().trim();
 
			if (format.test(data)) 
			{
				callback(data);
			}
			else 
			{
				stdout.write("Debe cumplir el formato: "+ format +"\n");
				ask(question, format, callback);
			}
		});
}
ask("Clave", /.+/ , function(clave)
{
	ask("Nombre", /.+/, function(name) 
		{
			ask("Turno", /./, function(turno) 
				{
					ask("Creditos", /[0-9]+/ , function(creditos)
						{
							ask("Maestro", /.+/, function (maestro)
								{
    	    	    
								    console.log("\n\nResumnes de materia\n---------------------");
								    console.log(">>Clave: ", clave);
								    console.log(">>Nombre:", name);
								    console.log(">>Turno:", turno);
								    console.log(">>Creditos:", creditos);
								    console.log(">>Maestro:", maestro);
								 
								    process.exit();
								});
						});
				});
		});
});