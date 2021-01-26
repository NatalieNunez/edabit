function correctTitle(str) {
  let arr = str.split(" ");
  let newArr = [];
  let indexArr = [];
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "and" || "the" || "of" || "in") {
      newArr.push(arr[i].toLowerCase());
    } else {
      let indexArr = arr[i].split("");
    }
    for (let j = 0; j < indexArr.length; j++) {
      if (indexArr[j] < 1) {
        store.push(indexArr[j].toUpperCase());
      } else if (index[j] >= 1) {
        store.push(indexArr[j].toLowerCase());
      }
      newArr.push(store);
    }
  }
  return newArr.join(" ");
}
