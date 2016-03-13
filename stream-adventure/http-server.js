var http = require('http');
var through2 = require('through2');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req.pipe(through2(write, end)).pipe(res);
  } else {
    res.end('method must be POST')
  }
});
server.listen(process.argv[2]);

function write(buf, _, next) {
  buf = buf.toString().toUpperCase();
  this.push(buf);
  next();
}
function end(done) { done(); }
