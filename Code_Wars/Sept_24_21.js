/* Filter out Strings from an Array
Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

Examples
filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

Notes
Zero is a non-negative integer.
The given array only has integers and strings.
Numbers in the array should not repeat.
The original order must be maintained. */

function filterArray(arr) {
	const result = arr.filter(val => 
    typeof(val) === 'number');
  return result;
}

//use filter which is a high order function (takes function as an argument) and test value with strict equality to see if it is a number or not. All the elements that pass the test will log in the output result array.

//typeof operator returns a string indicating the type of data structure. In our case here, if it returned " number" then it would pass the test and wouldn't be filtered out. 

/* Number Split
Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

Examples
numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]
Notes
All numbers will be integers.
You can expect negative numbers too. */

function numberSplit(n) {
	const result = (n/2);
	return [Math.floor(result), Math.ceil(result)];
}