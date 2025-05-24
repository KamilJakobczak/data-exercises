// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
	const newStr = isPalindromeRecursion(str);

	function isPalindromeRecursion(str) {
		if (str.length === 1) return str;
		return (
			str[str.length - 1] +
			isPalindromeRecursion(str.slice(0, str.length - 1))
		);
	}
	if (newStr === str) {
		return true;
	} else if (newStr !== str) return false;
}

// Different approach
// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
