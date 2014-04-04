/*:\> cd <path you wish your server to reside>
:\> npm install connect
Then in a file (I named) Server.js*/

var connect = require('connect'),
   http = require('http');
connect()
   .use(connect.static('<pathyouwishtoserve>'))
   .use(connect.directory('<pathyouwishtoserve>'))
   .listen(process.env.PORT, process.env.IP);//.listen(8888, '127.0.0.1');