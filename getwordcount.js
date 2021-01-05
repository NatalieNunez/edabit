function getWordCount(sentence) {
  let count = sentence.split();
  return count.length;
}
/* function getWordCount(sentence) {
  let sum = 1;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      sum++;
    }
  }
  return sum;
}