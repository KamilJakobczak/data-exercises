// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

function findLongestSubstring(str) {
	if (!str) {
		console.log(0);
		return 0;
	}

	let tempStr = '';
	let maxLength = 0;

	for (let end = 0; end < str.length; end++) {
		if (!tempStr) {
			tempStr = str[end];
		} else {
			const checkDup = tempStr.indexOf(str[end]);
			if (checkDup >= 0) {
				tempStr = tempStr.slice(checkDup + 1) + str[end];
			} else {
				tempStr += str[end];
			}
			maxLength = Math.max(tempStr.length, maxLength);
		}
	}
	return maxLength;
}

findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6
