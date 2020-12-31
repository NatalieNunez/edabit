function birthdayCakeCandles(candles) {
  candles.sort((a,b) => a - b);
  let count = 1;
  for (let i = candles[candles.length-2]; i <= candles.length - 1; i--) {
      if (i === candles[candles.length-1]) {
          count++;
      }
      if (i < candles[candles.length-1]) {
          return count;
      }
      return count;
  }

}