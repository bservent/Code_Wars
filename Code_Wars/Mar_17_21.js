/* Find Number of Digits in Number
Create a function that will return an integer number containing the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1 */

function num_of_digits(num) {
	return `${num}`.match(/\d/g).length;
}

/* Find the Bomb
Create a function that finds the word "bomb" in the given string. If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

Examples
bomb("There is a bomb.") ➞ "Duck!!!"

bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

bomb("This goes boom!!!") ➞ "There is no bomb, relax."
Notes
"bomb" may appear in different cases (i.e. uppercase, lowercase, mixed). */

const bomb = (str) => str.match(/bomb/gi)? "Duck!!!" : "There is no bomb, relax.";

