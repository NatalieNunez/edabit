function largestNumbers(n, arr) {
  arr.sort((a, b) => a - b);
  for (let i = arr.length - 1; i < arr.length; i--) {
    arr.shift() * (arr.length - n);
  }
  return arr;
}
/* input number and an array
output array of numbers
for loop, push numbers (indices) into new array
the amount of numbers we push in should be equal to n (newarr.length = n)
maybe sort? */
