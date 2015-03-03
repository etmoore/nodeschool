var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum);

// var inputs = process.argv.slice(2).map(function(a){ return parseInt(a) });
// var sum = inputs.reduce(function(a, b){
//     return a + b;
// }, 0);
// console.log(sum);
