var through2 = require('through2');
var trumpet = require('trumpet')();

var loudContent = trumpet.select('.loud').createStream();
loudContent.pipe(through2(function(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
})).pipe(loudContent);

process.stdin.pipe(trumpet).pipe(process.stdout);
