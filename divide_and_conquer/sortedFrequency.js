// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(log n)

function sortedFrequency(arr, test) {
	let right = arr.length - 1;
	let left = 0;
	let firstTestIndex = -1;
	let lastTestIndex = -1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === test) {
			firstTestIndex = mid;
			right = mid - 1;
		} else if (arr[mid] < test) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	left = 0;
	right = arr.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === test) {
			lastTestIndex = mid;
			left = mid + 1;
		} else if (arr[mid] < test) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	if (firstTestIndex === -1 || lastTestIndex === -1) {
		return -1;
	}

	return lastTestIndex - firstTestIndex + 1;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1
