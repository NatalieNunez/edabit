function largestNumbers(n, arr) {
  let newArr = [];
  arr.sort((a, b) => a - b);
  for (let i = arr[arr.length - 1 - n]; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
/* input number and an array
output array of numbers
for loop, push numbers (indices) into new array
the amount of numbers we push in should be equal to n (newarr.length = n)
maybe sort? */
