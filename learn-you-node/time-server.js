/*
  Write a TCP time server!

    Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.
*/

var net = require('net'); // import net module which has all the basic networking functions
var port = process.argv[2]; // get the port to listen on

function pad(n) { // pads numbers so that they're two digits
  return n < 10 ? '0' + n : n;
}

function formatDate(date){ // returns a string with the proper date formatting
  var dateString = date.getFullYear();
  dateString += '-' + pad(date.getMonth() + 1);
  dateString += '-' + pad(date.getDate());
  dateString += ' ' + pad(date.getHours());
  dateString += ':' + pad(date.getMinutes());
  dateString += '\n';
  return dateString;
}

var server = net.createServer((socket) => { // create TCP server (?), hands socket to callback
  var dateString = formatDate(new Date()); // create the datestring
  socket.end(dateString); // close the socket, writing the datestring
});
server.listen(port); // starts the server, listening on the desired port
