// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
	if (arr.length === 0) return [];
	const capitalized = arr[0][0].toUpperCase() + arr[0].slice(1);
	return [capitalized, ...capitalizeFirst(arr.slice(1))];

	// Different approach
	//      if (arr.length === 1) {
	//     return [arr[0][0].toUpperCase() + arr[0].substr(1)];
	//   }
	//   const res = capitalizeFirst(arr.slice(0, -1));
	//   const string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].substr(1);
	//   res.push(string);
	//   return res;
}

capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']
