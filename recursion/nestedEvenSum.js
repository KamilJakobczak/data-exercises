// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
const isOdd = val => {
	return val % 2 !== 0;
};

function nestedEvenSum(obj) {
	let sum = 0;
	for (const element of Object.values(obj)) {
		if (typeof element === 'number' && !isOdd(element)) {
			sum += element;
		} else if (typeof element === 'object') {
			sum += nestedEvenSum(element);
		}
	}
	return sum;
}

let obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup',
		},
	},
};

let obj2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
	d: 1,
	e: { e: { e: 2 }, ee: 'car' },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
