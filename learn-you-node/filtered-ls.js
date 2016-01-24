const fs = require('fs');

var path = process.argv[2];
var extension = process.argv[3];

fs.readdir(path, (err, files) => {
  var targetFiles = files.filter((file) => {
    return file.split('.')[1] === extension;
  });
  console.log(targetFiles.join('\n'));
});
