
exports.min = function min(array) {
  if (!Array.isArray(array) || array == 0) {
    return 0
  } return Math.min.apply(null, array)

}

exports.max = function max(array) {
  if (!Array.isArray(array) || array == 0) {
    return 0
  }
  return Math.max.apply(null, array)

}

exports.avg = function avg(array) {
  if (!Array.isArray(array) || array == 0) {
    return 0
  }
  return (array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }) / array.length)
}
