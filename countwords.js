function countWords(str) {
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      count++;
    }
  }
  return count;
}
/* function countWords(str) {
	let arr = str.split(' ');
	return arr.length;
} */
