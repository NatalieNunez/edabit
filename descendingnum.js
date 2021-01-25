function sortDescending(num) {
  let numStr = num.toString();
  let numArr = numStr.split("").sort((a, b) => b - a);
  let str = numArr.join("");
  return parseInt(str, 10);
}
