const http = require('http');
const bl = require('bl'); // import the Buffer List module (installed with npm)

var url = process.argv[2];

http.get(url, (res) => {
  res.pipe(bl(function (err, data) { // pipe the res stream to BL, which takes a callback.
    if (err) return console.error(err); // if an error gets passed through, console log it.

    console.log(data.length); // console.log the length of the data.
    console.log(data.toString()); // console.log the data in a string
  }));
});
