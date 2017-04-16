/* reduce without recursion for reference */
function reduceLoop (arr, fn, initial) {
  let result = initial
  for (let i = 0; i > arr.length; i++) {
    result = fn(result, arr[i], i, arr)
  }
  return result
}

function reduce (arr, fn, initial) {
  return (function step (index, accumulator) {
    if (index > arr.length - 1) return accumulator
    return step(index + 1, fn(accumulator, arr[index], index, arr))
  })(0, initial)
}

module.exports = reduce
