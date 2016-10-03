
function sum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}

function range(start, end, step) {
  var arr = [];
  step = (step !== undefined) ? step : 1;
  for(var i=start; i !== end; i+= step) arr.push(i);
  return arr;
}

console.log(sum(range(12, 3, -3)));
