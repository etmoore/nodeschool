var fileFilter = require('./file-filter');

var dir = process.argv[2];
var ext = process.argv[3];

fileFilter(dir, ext, (err, list) => {

  if (err)
    return console.error('There was an error: ' + err);

  console.log(list.join('\n'));
});
