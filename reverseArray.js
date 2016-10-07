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

function arrayToList (array) {
  var list = {};
  if (array.length > 1) {
    list.value = array.shift();
    list.rest = arrayToList(array);
  }
  else {
    list.value = array.shift();
    list.rest = null;
    }
  return list;
}



function listToArray(list) {
  array = [];
  for (var node = list; node; node = node.rest) {
    if (node.value !== undefined) array.push(node.value);
  }
  return array;
}

function prepend(list, element) {
  var array = listToArray(list);
  array.unshift(element);
  var newList = arrayToList(array);
  return newList;
}

function nth(list, number) {
  if(!list)
    return undefined;
  else if (number === 0)
    return list.value;
  else
    return nth(list.rest, number-1);

}


console.log(reverseArray([1,2,3,4,5]));
console.log(reverseInPlace([1,2,3,4,5]));
console.log(arrayToList([1,2,3]));
console.log(listToArray(arrayToList([1,2,3])));
console.log(prepend(arrayToList([1,2,3]), 8));
console.log(nth(arrayToList([1,2,3]), 1));
