// ES5 version
function loggerES5 (namespace) {
  return function () {
    var statements = Array.prototype.slice.call(arguments)
    console.log.apply(console, [namespace].concat(statements))
  }
}

// ES2015 version
function logger (namespace, ...rest) {
  return (...rest) => {
    console.log(namespace, ...rest)
  }
}

module.exports = logger
