// Divide and Conquer - findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity - O(log n)

// Space Complexity - O(1)

function findRotatedIndex(arr, num) {
	if (arr.length < 1) return -1;
	if (arr[0] === num) return 0;
	if (arr[arr.length - 1] === num) return arr.length - 1;

	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] > arr[right]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	const rotationPoint = left;
	if (num >= arr[0]) {
		left = 0;
		right = rotationPoint - 1;
	} else {
		left = rotationPoint;
		right = arr.length - 1;
	}

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === num) {
			return mid;
		} else if (arr[mid] < num) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}
findRotatedIndex([3, 4, 1, 2], 4); // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3); // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14); // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); // -1
findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16); // 5
