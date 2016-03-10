var through2 = require('through2');
var split = require('split');
var lineCount = 1;

var transformedText = through2(function(line, _, next) {
  if (lineCount % 2 === 0) {
    line = line.toString().toUpperCase() + '\n';
  } else {
    line = line.toString().toLowerCase() + '\n';
  }
  this.push(line);
  lineCount++;
  next();
});

process.stdin.pipe(split()).pipe(transformedText).pipe(process.stdout);
