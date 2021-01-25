function sortDescending(num) {
  let numStr = num.toString();
  let numArr = numStr.split("").sort((a, b) => b - a);
  let str = numArr.join("");
  return parseInt(str, 10);
}

/* function sortDecending(num) {
	return parseInt(num.toString().split('').sort((a,b) => b - a).join(''))
}

instructions:
Create a function that takes any nonnegative number as an argument and return 
it with it's digits in descending order. Descending order is when you sort from highest to lowest.

sortDescending(123) ➞ 321
sortDescending(1254859723) ➞ 9875543221
sortDescending(73065) ➞ 76530
*/
