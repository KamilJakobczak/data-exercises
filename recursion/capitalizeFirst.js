// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
	if (arr.length === 0) return [];
	const capitalized = arr[0][0].toUpperCase() + arr[0].slice(1);
	return [capitalized, ...capitalizeFirst(arr.slice(1))];
}

capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']
