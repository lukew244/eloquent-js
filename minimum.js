function findMinimum() {
  var min;
  for (var i = 0; i < arguments.length; i++){
    if (min === undefined || arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}


module.exports = findMinimum;
