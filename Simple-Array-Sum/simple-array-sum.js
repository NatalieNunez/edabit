function simpleArraySum(ar) { // there is a function declaration named simpleArraySum that takes in one parameter ar
    let sum = 0; // when reading variables you start on the right side of the = sign
    // there is a number 0 that is being ASSIGNED to the variable named sum
 for (let i = 0; i < ar.length; i++) { // there is a for loop with an initialization of the number 0 being assigned to the variable named i; there is a condition where i is less than the length property of the value stored in ar; there is a final expression where i is being incremented; and an opening curly brace for the code block
     sum += ar[i]; // taking the value stored in ar at i and adding it to the value stored in sum and the result of that expression is being assigned to the variable named sum 
 } // closing curly brace of the code block
 return sum; // returning the value stored in the variable named sum
} // closing curly brace of the code block