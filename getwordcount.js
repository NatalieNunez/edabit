function getWordCount(sentence) {
  let count = sentence.split();
  return count.length;
}
/* function getWordCount(sentence) {
  if (sentence.length == 0) {
    return 0;
  }
  let sum = 1;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      sum++;
    }
  }
  return sum;
} */