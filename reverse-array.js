function reverse(arr) {
  let storeArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    storeArr.push(arr[i]);
  }
  return storeArr;
}
