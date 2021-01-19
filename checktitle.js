function checkTitle(title) {
  let splitArr = title.join(" ");
  let arr = [];
  for (let i = 0; i < splitArr.length; i++) {
    arr.push(splitArr[i][0]);
  }
  let str = arr.join("");
  let result = true;
  for (let j = 0; j < str.length; j++) {
    if (str[j] !== str[j].toUpperCase()) {
      result = false;
    }
  }
  return result;
}
/*input string
output boolean
for loop 
*/
