var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var targetFilePath = process.argv[3];

var server = http.createServer((req, res)=> {
  var fileContents = fs.createReadStream(targetFilePath);
  fileContents.pipe(res);
});
server.listen(port);
