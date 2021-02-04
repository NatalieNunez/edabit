let counter = 10; // step 1
let numbers = []; // step 2
for (let i = 0; i < 10; i++) {
  numbers.push(counter+=73);
} // step 3
console.log(numbers); // step 4
if (counter > 740) {
  console.log("Maximum array number exceeded");
} else {
 console.log("Array values within specification");
} // step 5
let stats = {}; // step 6

function getStats(statsObj, numbersArr){ // step 7ab
    let largNum = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] >= largNum) {
      largNum = numbersArr[i];
    }
    statsObj.largestNum = largNum;
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
getStats(stats, numbers);
 let returnedStats = stats;
  console.log(returnedStats); 