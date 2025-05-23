// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
	return arr.reduce((acc, val) => {
		return acc.concat(Array.isArray(val)) ? flatten(val) : val, [];
	});
}

// Different approach
// function flatten(oldArr) {
// 	let newArr = [];
// 	for (let i = 0; i < oldArr.length; i++) {
// 		if (Array.isArray(oldArr[i])) {
// 			newArr = newArr.concat(flatten(oldArr[i]));
// 		} else {
// 			newArr.push(oldArr[i]);
// 		}
// 	}
// 	return newArr;
// }

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
