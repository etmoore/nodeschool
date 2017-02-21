const fs = require('fs');

var path = process.argv[2];
fs.readFile(path, 'utf8', function(err, data){
  var newLineCount = data.split('\n').length - 1;
  console.log(newLineCount);
});
