var settings={
	"web_app_name" : "Alligator TestApp",
	"port"         : 15454,
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

var prn=function(){ return  settings.toString('utf8',0,settings.length);}


module.exports.prn = prn;