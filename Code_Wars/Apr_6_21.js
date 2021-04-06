/* Is One Array a Subset of Another?
Create a function that returns true if the first array is a subset of the second. Return false otherwise.

Examples
isSubset([3, 2, 5], [5, 3, 7, 9, 2]) ➞ true

isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]) ➞ true

isSubset([1, 2], [3, 5, 9, 1]) ➞ false */

function isSubset(arr1, arr2) {
	let result = arr1.every(val => arr2.includes(val))
	return result
}

/* Say "Hello" Say "Bye"
Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

Examples
sayHelloBye("alon", 1) ➞ "Hello Alon"

sayHelloBye("Tomi", 0) ➞ "Bye Tomi"

sayHelloBye("jose", 0) ➞ "Bye Jose"
Notes
The name you return must be capitalized. */

function sayHelloBye(name, num) {
	let capName = name.charAt(0).toUpperCase() + name.slice(1);
	if(num == 0) {
		return 'Bye ' + capName
	}else if(num == 1) {
		return 'Hello ' + capName
	}
}

