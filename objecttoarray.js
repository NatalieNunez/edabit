function objectToArray(obj) {
	let newArr = []; // creating variable called newArr and assigning to array literal
	for (let prop in obj) { // using for in loop, created variable called prop; no need to create another prop variable
		newArr.push([prop, obj[prop]]); // dont need to set newArr equal to itself since you are pushing new values with push method
	}
	return newArr; //return the container
}
// input object, output is a nested array
// since the output is a nested array, you need brackets around prop, obj[prop]
// 
// PUSH (method attached to array) them to a variable called newArr