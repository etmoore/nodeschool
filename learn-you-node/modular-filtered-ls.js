var fileFilter = require('./file-filter'); // require the file-filter function defined in file-filter.js

var dir = process.argv[2]; // get the desired path
var ext = process.argv[3]; // get the desired extension from the cl arguments

fileFilter(dir, ext, (err, list) => { // call fileFilter, passing in the directory, extension, and callback function. The callback function will console.log the error if there is is, or print the files if there is not.

  if (err)
    return console.error('There was an error: ' + err);

  console.log(list.join('\n'));
});
