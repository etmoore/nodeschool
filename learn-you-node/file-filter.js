var fs = require('fs');
var path = require('path');

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err)
      return callback(err);

    list = files.filter((file) => {
      return path.extname(file) === "." + ext;
    });

    callback(null, list);
  });
};
