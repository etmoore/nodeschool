const fs = require('fs');
const path = require('path');

var dir = process.argv[2];
var extension = process.argv[3];

fs.readdir(dir, (err, files) => {
  var targetFiles = files.filter((file) => {
    return path.extname(file) === "." + extension;
  });
  console.log(targetFiles.join('\n'));
});
