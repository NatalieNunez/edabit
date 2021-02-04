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
    let arrTotal = 0;
    let largeNum = 0;
  for (let i = 0; i < numbersArr.length; i++) { //7c
    if (numbersArr[i] >= largeNum) {
      largeNum = numbersArr[i];
    }
    statsObj.largestNum = largeNum;
  }
  for (let i = 0; i < numbersArr.lenght; i++) { //7d
    arrTotal += numbersArr[i];
    let arrAverage = arrTotal/numbersArr.length;
  } 
  statsObj.averageNum = arrAverage;
  return statsObj;
}
console.log(getStats(stats, numbers));