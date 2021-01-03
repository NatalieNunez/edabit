function clearZeros(numberString) {
  for (let i = 0; i < numberString.length; i++) {
    if (i == 0) {
      numberString = numberString.shift();
    }
  }
  return numberString;
}