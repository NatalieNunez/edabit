function countTrue(arr) {
  let total = 0; // creating a container to hold the amount of times the for loop finds true in the array
 for (let i = 0; i < arr.length; i++) { // for loop to iterate through array
   if (arr[i] === true) { // nested for loop with if statement to find when true appears
     total = total + 1; // code block increment variable total by 1 every time arr[i] is true
   }
 }
 return total; // return container
}
// Create a function which returns the number of true values there are in an array
// input: array
// output: number