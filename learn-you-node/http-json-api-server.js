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

const server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);

  // parsetime route
  if (parsedUrl.pathname == '/api/parsetime'){
    // grab the time from the query property
    let dateString = parsedUrl.query.iso;
    let dateObject = new Date(dateString);
    let timeObject = {};
    // create an object with the hour, minute, and second properties
    timeObject.hour = dateObject.getHours();
    timeObject.minute = dateObject.getMinutes();
    timeObject.second = dateObject.getSeconds();
    // create the JSON string with JSON.stringify()
    let timeJSON = JSON.stringify(timeObject);
    // return the JSON string in the response
    res.end(timeJSON);
  }

  // unixtime route
  if (parsedUrl.pathname == '/api/unixtime'){
    let dateString = parsedUrl.query.iso;
    let dateObject = new Date(dateString);
    let timeObject = {};
    timeObject.unixtime = dateObject.getTime();
    let timeJSON = JSON.stringify(timeObject);
    res.end(timeJSON);
  }
});
server.listen(port);

// TODO: extract the routes into separate methods
