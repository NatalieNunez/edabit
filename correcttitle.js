function correctTitle(str) {
  let arr = str.split(" "); // i need to split at spaces AND hyphens but dont know how to do both
  let newArr = []; //
  let indexArr = [];
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "and" || "the" || "of" || "in") {
      newArr.push(arr[i].toLowerCase());
    } else {
      let indexArr = arr[i].split(""); // created this array so i can make the strings in arr become their own arrays
    }
    for (let j = 0; j < indexArr.length; j++) {
      if (indexArr[j] < 1) {
        store.push(indexArr[j].toUpperCase());
      }
      if (indexArr[j] >= 1) {
        store.push(indexArr[j].toLowerCase());
      }
      if (indexArr[j] === "-") {
        store.push(indexArr[j + 1].toUpperCase());
      }
      newArr.push(store);
    }
  }
  return newArr.join(" ");
}

// ##### Instructions ######
// Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.

// The words and, the, of and in should be lowercase.
// All other words should have the first character as uppercase and the rest lowercase.

// ##### Examples #####
// correctTitle("jOn SnoW, kINg IN thE noRth.")
// ➞ "Jon Snow, King in the North."
// correctTitle("sansa stark, lady of winterfell.")
// ➞ "Sansa Stark, Lady of Winterfell."

// currently code returns everything as lowercase***** find out why
