// Frequency Counter / Multiple Pointer - findPair
// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true
// findPair([1,2,3], 0) // false

// Part 1 - solve this with the following requirements:

// Time Complexity Requirement - O(n)

// Space Complexity Requirement - O(n)

// Part 2 - solve this with the following requirements:

// Time Complexity Requirement - O(n log n)

function findPair(arr, result) {
	// MY SOLUTION
	// if (arr.length < 1) {
	// 	console.log(false);
	// 	return false;
	// }
	// let start = 0;
	// let next = 1;
	// if (result === 0) {
	// 	let index = 0;
	// 	let hasDupe = false;
	// 	arr.sort((a, b) => a - b);
	// 	for (let i = 0; i < arr.length; i++) {
	// 		if (arr[i] === arr[i - 1]) {
	// 			if (!hasDupe) {
	// 				arr[index] = arr[i];
	// 				index++;
	// 				hasDupe = true;
	// 			} else {
	// 				hasDupe = false;
	// 			}
	// 		}
	// 	}
	// 	return hasDupe;
	// }
	// while (start < arr.length - 1) {
	// 	const deduction1 = arr[start] - arr[next];
	// 	const deduction2 = arr[next] - arr[start];
	// 	if (deduction1 === result || deduction2 === result) {
	// 		console.log(true);
	// 		return true;
	// 	} else {
	// 		next++;
	// 	}
	// 	start++;
	// }
	// console.log(false);
	// return false;
	// // O(n) Space + O(n) Time
	// if (n === 0) {
	// 	const set = new Set();
	// 	for (let num of arr) {
	// 		if (set.has(num)) {
	// 			return true;
	// 		}
	// 		set.add(num);
	// 	}
	// 	return false;
	// }
	// const setValues = new Set(arr);
	// for (let val of arr) {
	// 	if (setValues.has(val + result) || setValues.has(val - result)) {
	// 		return true;
	// 	}
	// }
	// return false;
	// O(1) space + O(n logn) time
	// arr.sort((a, b) => a - b);
	// let i = 0;
	// let j = 0;
	// while (i < arr.length && j < arr.length) {
	// 	if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(result)) {
	// 		console.log(true);
	// 		return true;
	// 	} else if (arr[j] - arr[i] < result) {
	// 		j++;
	// 	} else {
	// 		i++;
	// 	}
	// }
	// console.log(false);
	// return false;
}

findPair([6, 1, 4, 10, 2, 4], 2); // true
findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1); // true
findPair([4, -2, 3, 10], -6); // true
findPair([6, 1, 4, 10, 2, 4], 22); // false
findPair([], 0); // false
findPair([5, 5], 0); // true
findPair([-4, 4], -8); // true
findPair([-4, 4], 8); // true
findPair([1, 3, 4, 6], -2); // true
findPair([0, 1, 3, 4, 6], -2); // true
findPair([1, 2, 3], 0); // false
