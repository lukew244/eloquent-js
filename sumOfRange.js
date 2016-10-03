
function sum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}

function range(start, end) {
  arr = [];
  for(var i=start; i <= end; i++) arr.push(i);
  return arr;
}

console.log(sum(range(1, 10)));
