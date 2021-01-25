function reverseOdd(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 1) {
      newArr.push(arr[i].split("").reverse().join(""));
    } else if (arr[i].length % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr.join(" ");
}
