function countBoomerangs(arr) {
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i+2] && arr[i] !== arr[i+1]) {
			counter++;
		}
	}
	return counter;
}

/* 
##### INSTRUCTIONS #####
Create a function that returns the total number of boomerangs in an array.
Boomerangs: [3, 7, 3], [1, -1, 1], [5, 6, 5]

##### EXAMPLES #####
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
*/