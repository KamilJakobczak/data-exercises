// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
	let values = [];
	for (const element of Object.values(obj)) {
		if (typeof element === 'string') {
			values.push(element);
		} else if (typeof element === 'object' && element !== null) {
			values = values.concat(collectStrings(element));
		}
	}

	return values;

	// Different Approach 1

	// let stringsArr = [];

	//  function gatherStrings(o) {
	//      for(let key in o) {
	//          if(typeof o[key] === 'string') {
	//              stringsArr.push(o[key]);
	//          }
	//          else if(typeof o[key] === 'object') {
	//              return gatherStrings(o[key]);
	//          }
	//      }
	//  }

	//  gatherStrings(obj);

	//  return stringsArr;

	// Different approach 2

	// let stringsArr = [];
	//  for(let key in obj) {
	//      if(typeof obj[key] === 'string') {
	//          stringsArr.push(obj[key]);
	//      }
	//      else if(typeof obj[key] === 'object') {
	//          stringsArr = stringsArr.concat(collectStrings(obj[key]));
	//      }
	//  }

	//  return stringsArr;
}

const obj = {
	stuff: 'foo',
	data: {
		val: {
			thing: {
				info: 'bar',
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: 'baz',
					},
				},
			},
		},
	},
};

collectStrings(obj); // ["foo", "bar", "baz"])
