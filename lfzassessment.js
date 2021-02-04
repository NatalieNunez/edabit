let counter = 10;
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(counter+=73);
}
console.log(numbers);
if (counter > 740) {
  console.log("Maximum array number exceeded");
} else {
 console.log("Array values within specification");
}
let stats = {};

function getStats(statsObj, numbersArr){
    let largeNum = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] >= largeNum) {
      largeNum = numbersArr[i];
    }
    statsObj.largestNum = largeNum;
  }
    let arrTotal = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    arrTotal += numbersArr[i];
  } 
  let numLength = numbersArr.length;
  let arrAverage = arrTotal / numLength;
  statsObj.averageNum = arrAverage;
  return statsObj;
}
getStats(stats, numbers)
 let returnedStats = stats;
 console.log("The largest number was " + returnedStats.largestNum + " and the average of all the numbers was " + returnedStats.averageNum);