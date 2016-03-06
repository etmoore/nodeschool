var through2 = require('through2');

var transformedText = through2(function(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
});

process.stdin.pipe(transformedText).pipe(process.stdout);

