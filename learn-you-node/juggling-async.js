var http = require('http');
var results = []; // create array to hold results
var count = 0; // initialize a counter to keep track of how many requests have come back
var urls = process.argv.slice(2, process.argv.length); // get the urls from the command line arguments, store in array

function printResults() { // this will be called when the http calls have completed. Prints the results.
  results.forEach((result)=> {
    console.log(result);
  });
}

urls.forEach((url, index)=> { // For each url...
  http.get(url, (res)=> { // HTTP GET request, handing the response to a callback
    var pageContent = ''; // initialize an empty string to hold the page content
    res.setEncoding('utf-8'); // sets the encoding to be a string rather than a buffer
    res.on('error', console.error); // if there's an error, hand it to console.error (function)
    res.on('data', (data)=> { // when there's data, append it to pageContent
      pageContent += data;
    });
    res.on('end', ()=> { // when the data floweth no more, add the page content to the results array, in the index of the http call (ensuring that it stays in order)
      results[index] = pageContent;
      count++; // increment the callback counter
      if (count === urls.length) { // if there have been as many callbacks fired as urls provided, then log the results
        printResults();
      }
    });
  });
});
