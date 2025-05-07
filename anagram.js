function validAnagram(text1, text2) {
	if (text1.length !== text2.length) {
		return false;
	}
	const letters = {};

	for (let letter of text1) {
		letters[letter] ? (letters[letter] += 1) : (letters[letter] = 1);
	}
	for (let letter of text2) {
		if (letters[letter] > 0) {
			letters[letter] -= 1;
		} else return false;
	}

	return true;
}

validAnagram('abcdd', 'abddc');
