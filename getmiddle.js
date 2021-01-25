function getMiddle(str) {
  if (str.length % 2 !== 0) {
    return str[Math.floor(str.length / 2)];
  } else {
    return str.substr(Math.floor(str.length - 1) / 2, 2);
  }
}

/*
##### Instructions #####
Create a function that takes a string and returns the middle character(s). 
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle two characters.

##### Examples ####
getMiddle("test") ➞ "es"
getMiddle("testing") ➞ "t"
getMiddle("middle") ➞ "dd"

##### Refactored #####
function getMiddle(str) {
  var start = Math.ceil(str.length / 2) - 1;
  var end = Math.floor(str.length / 2) + 1;
  return str.substring(start, end);
}

*/
