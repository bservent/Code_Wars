/* No Conditionals?
Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.

Examples
flip(1) ➞ 0

flip(0) ➞ 1
Notes
Try completing this challenge without using any:

Conditionals
Ternary operators
Negations
Bit operators */

function flip(y) {
  return Math.abs(!y)
};

console.log(flip(0));

/* Add up the Numbers from a Single Number
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300 */

function addUp(num) {
	let result = 0;
	for(let i = 1; i <= num; i++) {
		result += i
	};
	return result
}

console.log(addUp(10));

/* Return Something to Me!
Write a function that returns the string "something" joined with a space " " and the given argument a.

Examples
giveMeSomething("is better than nothing") ➞ "something is better than nothing"

giveMeSomething("Bob Jane") ➞ "something Bob Jane"

giveMeSomething("something") ➞ "something something" */

function giveMeSomething(a) {
	return "something " + a 
}

