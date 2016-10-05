function reverseArray(array) {
  var newArr = [];
  for(var i=(array.length - 1); i >= 0; i--) newArr.push(array[i]);
  return newArr;
}

function reverseInPlace(array) {
  for(var i=0; i < array.length/2; i++) {
    var cut = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = cut;
  }
  return array;
}

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseInPlace([1,2,3,4,5]));
