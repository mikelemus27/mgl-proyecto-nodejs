var fs = require('fs'),
jssp = require('./lib/jssp'),
sys = require('sys');
var settings=require('./settings');
var c9=true;
if (c9==false){
fs.readFile(process.argv[2] || './settings.json', function(err, data) {
    var settings = {};
    if (err) {
        sys.puts('No settings.json found ('+err+'). Using default settings');
    } else {
        try {
            settings = JSON.parse(data.toString('utf8',0,data.length));
        } catch (e) {
            sys.puts('Error parsing settings.json: '+e);
            process.exit(1);
        }
    }
    jssp.start(settings,__dirname);
});
}
else
{
    
    console.log("settings :"+settings.prn());
     settings=JSON.parse(settings.prn());
     jssp.start(settings,__dirname);
}



