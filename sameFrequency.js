// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
	if (num1.toString().length !== num2.toString().length) {
		return false;
	}
	const numbersFreq1 = {};

	for (const digit of num1.toString()) {
		if (!numbersFreq1[digit]) {
			numbersFreq1[digit] = 1;
		} else {
			numbersFreq1[digit] += 1;
		}
	}
	for (const digit of num2.toString()) {
		if (numbersFreq1[digit] > 0) {
			numbersFreq1[digit] -= 1;
		} else {
			return false;
		}
	}
	return true;
}

sameFrequency(182, 282);
