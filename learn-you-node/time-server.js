var net = require('net');
var port = process.argv[2];

function pad(n) {
  return n < 10 ? '0' + n : n;
}

var server = net.createServer((socket)=> {
  var date = new Date();
  var dateString = date.getFullYear();
  dateString += '-' + pad(date.getMonth() + 1);
  dateString += '-' + pad(date.getDate());
  dateString += ' ' + pad(date.getHours());
  dateString += ':' + pad(date.getMinutes());
  dateString += '\n';

  socket.end(dateString);
});
server.listen(port);
