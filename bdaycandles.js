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

/* You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. 
They will only be able to blow out the tallest of the candles. Count how many candles are tallest */