function sliceSum(arr, n) {
	let sum = 0;
	if (n > arr.length) {
		for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		}
	} else {
	for (let i = 0; i < n; i++) {
	sum = sum + arr[i];
	 }
	}
	return sum;
}
// 2 inputs: 1 array, 1 number 
// output: number
// iterate through array 
// sum = sum + arr[i]