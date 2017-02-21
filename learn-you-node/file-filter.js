var fs = require('fs');
var path = require('path');

module.exports = (dir, ext, callback) => { // export a function that takes 3 arguments: dir, ext, callback.
  fs.readdir(dir, (err, files) => { // use the async readdir method, which takes a directory (path), and a callback that itself accepts err and an array of file names
    if (err) // if there's an error, pass it to the callback.
      return callback(err);

    list = files.filter((file) => { // filter the files, produces new array that pass the condition below
      return path.extname(file) === "." + ext; // return the file if its extension matches the desired extension
    });

    callback(null, list); // call the callback, passing in null for err and the list of files that passed the filter
  });
};
