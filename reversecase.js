function reverseCase(str) {
  let arr = str.split();
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase) {
      newArr.push(arr[i].toLowerCase);
    }
    if (str[i] === str[i].toLowerCase) {
      newArr.push(arr[i].toUpperCase);
    }
  }
  return newArr.join("");
}
