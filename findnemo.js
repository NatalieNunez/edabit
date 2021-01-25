function findNemo(sentence) {
  let arr = sentence.split(" ");
  let index = arr.indexOf("Nemo");
  if (index >= 0) {
    return `I found Nemo at ${index + 1}!`;
  } else {
    return "I can't find Nemo :(";
  }
}
