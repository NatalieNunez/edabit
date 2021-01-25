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

/*
##### Instructions #####
Given a string, reverse all the words which have odd length. 
The even length words are not changed

##### Examples #####
reverseOdd("Bananas") ➞ "sananaB"
reverseOdd("One two three four") ➞ "enO owt eerht four"
*/
