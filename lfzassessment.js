let counter = 10; // step 1
let numbers = []; // step 2
for (let i = 0; i <= 10; i++) {
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
let arrAverage = 0;
  let largNum = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] > largNum) {
      largNum = numbersArr[i];
    }
  }
  for (let i = 0; i < numbersArr.lenght; i++) {
    arrTotal = arrTotal + numbersArr[i];
  }
  arrAverage = arrTotal/numbersArr.length;
  statsObj.largestNum = largNum;
  statsObj.averageNum = arrAverage; 
  return statsObj;
}