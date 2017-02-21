const fs = require('fs');

var path = process.argv[2]; // grab the path from the command line arguments
fs.readFile(path, 'utf8', function(err, data){ // asychronous because it's using a callback function to handle the error or data. Using the node idiom for function signatures: err as first argument, data as second.
  var newLineCount = data.split('\n').length - 1;
  console.log(newLineCount);
});
