// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(number) {
	// initial solution but not recursive
	// let fibArr = [1, 1];
	// if (number === 1) {
	// 	return fibArr[0];
	// }
	// if (number === 2) {
	// 	return fibArr[1];
	// }
	// let current = 2;
	// while (current <= number - 1) {
	// 	fibArr.push(fibArr[current - 2] + fibArr[current - 1]);
	// 	current++;
	// }

	// return fibArr[number - 1];

	// recursive solution
	if (number <= 2) return 1;

	return fib(number - 1) + fib(number - 2);
}

// solution using memo
function fibMemo(number, memo = {}) {
	if (number in memo) return memo[number];
	if (number === 1) return 1;
	if (number === 2) return 1;

	memo[number] = fibMemo(number - 1, memo) + fibMemo(number - 2, memo);
	return memo[number];
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
