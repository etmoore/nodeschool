/*
  Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.
*/

const url = require('url');
const http = require('http');

const port = process.argv[2];

function parseTime(dateObject){
  let timeObject = {};
  timeObject.hour = dateObject.getHours();
  timeObject.minute = dateObject.getMinutes();
  timeObject.second = dateObject.getSeconds();
  return timeObject;
}

function parseUnixTime(dateObject){
  let timeObject = {};
  timeObject.unixtime = dateObject.getTime();
  return timeObject;
}

const server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true);
  let dateObject = new Date(parsedUrl.query.iso);

  // parsetime route
  if (parsedUrl.pathname == '/api/parsetime'){
    let timeObject = parseTime(dateObject);
    res.end(JSON.stringify(timeObject));
  }

  // unixtime route
  if (parsedUrl.pathname == '/api/unixtime'){
    let timeObject = parseUnixTime(dateObject);
    res.end(JSON.stringify(timeObject));
  }
});
server.listen(port);
