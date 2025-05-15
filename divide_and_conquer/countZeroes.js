// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)

function countZeroes(arr) {
	//initital solution but not O(logn)
	// let zeroes = 0;
	// let start = arr.length - 1;
	// while (arr[start] === 0) {
	// 	start--;
	// }
	// if (arr[start] === 1) {
	// 	zeroes = arr.length - start - 1;
	// } else {
	// 	zeroes = arr.length;
	// }
	// return zeroes;

	let left = 0;
	let right = arr.length - 1;
	let firstZeroIndex = -1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] === 0) {
			firstZeroIndex = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	if (firstZeroIndex === -1) return 0;
	return arr.length - firstZeroIndex;
}

countZeroes([1, 1, 1, 1, 0, 0]); // 2
countZeroes([1, 0, 0, 0, 0]); // 4
countZeroes([0, 0, 0]); // 3
countZeroes([1, 1, 1, 1]); // 0
