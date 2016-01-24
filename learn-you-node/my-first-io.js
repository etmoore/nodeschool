const fs = require('fs');

var path = process.argv[2];
var fileContents= fs.readFileSync(process.argv[2], 'utf8');
var newLines = fileContents.split('\n').length - 1;

console.log(newLines);
