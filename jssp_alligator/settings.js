var settings={
	"web_app_name" : "Alligator TestApp",
	"port"         : process.env.PORT,
	"host"         :process.env.IP,
	"path"         : {
				"root":"/WWW/",
				"lib":"/WWWlib/"
			},
	"server_script": {
				"ext":"jssp",
				"begin":"<?",
				"begin_additional_write":"=",
				"end":"?>",
				"session_minutes":30,
				"memcached":{
						"enable":0,
						"server":"localhost",
						"port":11211
					}
			 },
	"debug_mode"   : 1,
	"nodes"	       : 1
};

var prn=function(){ return JSON.stringify(settings);}/*http://stackoverflow.com/questions/18110520/how-do-i-return-the-formatted-json-object-in-nodejs*/


module.exports.prn = prn;