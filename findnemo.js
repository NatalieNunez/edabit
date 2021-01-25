function findNemo(sentence) {
  let arr = sentence.split(" ");
  let index = arr.indexOf("Nemo");
  if (index >= 0) {
    return `I found Nemo at ${index + 1}!`;
  } else {
    return "I can't find Nemo :(";
  }
}

// ##### Instructions #####
// You're given a string of words. You need to find the word "Nemo", and return a string like this:
// "I found Nemo at [the order of the word you find nemo]!".
// If you can't find Nemo, return "I can't find Nemo :("

// ##### Examples #####
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
// findNemo("Nemo is me") ➞ "I found Nemo at 1!"
