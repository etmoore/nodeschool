function duckCount (...args) {
  return args.filter((arg) => {
    return Object.prototype.hasOwnProperty.call(arg, 'quack')
  }).length
}

module.exports = duckCount
