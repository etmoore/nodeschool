/*
  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.
*/

var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer((req, res) => {
  if (req.method !== 'POST') res.end('must be POST request');

  req.pipe(map((chunk) => {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port);
