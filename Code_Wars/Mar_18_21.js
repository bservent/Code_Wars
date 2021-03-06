/* Array Operation
Create a function that takes three parameters where:

x is the start of the range (inclusive).
y is the end of the range (inclusive).
n is the divisor to be checked against.
Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

Examples
arrayOperation(1, 10, 3) ➞ [3, 6, 9]

arrayOperation(7, 9, 2) ➞ [8]

arrayOperation(15, 20, 7) ➞ [] */

function arrayOperation(x, y, n) {
	newArray = []
	for (let i = x; i <= y; i++) {
		if (i % n === 0){
			newArray.push(i);
		}
	}
	return newArray
}

/* Sort an Array by String Length
Create a function that takes an array of strings and return an array, sorted from shortest to longest.

Examples
sortByLength(["Google", "Apple", "Microsoft"])
➞ ["Apple", "Google", "Microsoft"]

sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

sortByLength(["Turing", "Einstein", "Jung"])
➞ ["Jung", "Turing", "Einstein"] */

const sortByLength = (arr) => arr.sort((a,b) => (a.length - b.length));

/* Recursion to Repeat a String n Number of Times
Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

String.prototype.repeat() is not allowed

Examples
repetition("ab", 3) ➞ "ababab"

repetition("kiwi", 1) ➞ "kiwi"

repetition("cherry", 2) ➞ "cherrycherry"
Notes
The second parameter of the function is positive integer. */

function repetition(txt, n) {
	let newString = "";
	while (n > 0) {
		newString += txt;
		n--;
	}
	return newString;
}