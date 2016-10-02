function isEven(number) {
  if (number < 0) number = -number;
  if (number === 1) return false;
  else if (number === 0) return true;
  return isEven((number-2));
}

console.log(isEven(50));
console.log(isEven(65));
console.log(isEven(-20));
