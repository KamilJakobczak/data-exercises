// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
	if (arr.length === 0) return [];
	return [arr[0].toUpperCase(), ...capitalizeWords(arr.splice(1))];

	// Different approach

	// if (arr.length === 1) {
	// 	return [arr[0].toUpperCase()];
	// }
	// let res = capitalizeWords(arr.slice(0, -1));
	// res.push(arr.slice(arr.length - 1)[0].toUpperCase());
	// return res;
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
