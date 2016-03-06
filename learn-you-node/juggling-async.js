var http = require('http');
var results = [];
var count = 0;
var urls = process.argv.slice(2, process.argv.length);

function printResults() {
  results.forEach((result)=> {
    console.log(result);
  });
}

urls.forEach((url, index)=> {
  http.get(url, (res)=> {
    var pageContent = '';
    res.setEncoding('utf-8');
    res.on('error', console.error);
    res.on('data', (data)=> {
      pageContent += data;
    });
    res.on('end', ()=> {
      results[index] = pageContent;
      count++;
      if (count === urls.length) {
        printResults();
      }
    });
  });
});
