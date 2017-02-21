var http = require('http'); // require the http module

var url = process.argv[2]; // get the url from the command line arguments

http.get(url, (res) => { // send GET HTTP request to the url, handing the response to the callback
  res.setEncoding('utf8');
  res.on('data', (data) => { // when the response has data, console log that data
    console.log(data);
  });
});
