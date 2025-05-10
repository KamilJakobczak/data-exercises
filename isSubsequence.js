// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(str1, str2) {
	// time O(n), space O(1)
	let start = 0;
	const textArr = str1.split('');
	for (let index = 0; index < str2.length; index++) {
		if (start > textArr.length - 1) {
			return true;
		}
		const letter = str2[index];
		if (textArr[start] === letter) {
			start++;
		}
	}
	if (start > textArr.length - 1) {
		return true;
	}
	return false;

	// iterative solution
	// let i = 0;
	// let j = 0;
	// if (!str1) return true;
	// while (j < str2.length) {
	// 	if (str2[j] === str1[i]) i++;
	// 	if (i === str1.length) return true;
	// 	j++;
	// }
	// return false;

	// recursive but not O(1) space Complexity
	// if (str1.length === 0) return true;
	// if (str2.length === 0) return false;
	// if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
	// return isSubsequence(str1, str2.slice(1));
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
