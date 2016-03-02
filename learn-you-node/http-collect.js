const http = require('http');
const bl = require('bl');

var url = process.argv[2];

http.get(url, (res) => {
  res.pipe(bl(function (err, data) {
    console.log(data.length);
    console.log(data.toString());
  }));
});
