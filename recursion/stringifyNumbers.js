// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.

function stringifyNumbers(obj) {
	let stringifiedNumbersObj = {};
	for (const key in obj) {
		const value = obj[key];

		if (typeof value === 'number') {
			stringifiedNumbersObj[key] = value.toString();
		} else if (
			typeof value === 'object' &&
			value !== null &&
			!Array.isArray(value)
		) {
			stringifiedNumbersObj[key] = stringifyNumbers(value);
		} else {
			stringifiedNumbersObj[key] = value;
		}
	}
	return stringifiedNumbersObj;
}

let obj = {
	num: 1,
	test: [],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66,
		},
	},
};

stringifyNumbers(obj);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
