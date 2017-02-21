const fs = require('fs'); // require the fs module for working with filesystem

var path = process.argv[2]; // get the path from the command line arguments
var fileContents= fs.readFileSync(process.argv[2], 'utf8'); // read the file, assinging the contents to fileContents variable
var newLines = fileContents.split('\n').length - 1; // split the file contents by new line into an array, then assign the length of that array - 1 to the variable newLines. We subtract 1 because there will be one less /n character than total number lines of text.

console.log(newLines);
