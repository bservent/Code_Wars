/* 2/10/21 CodeWars */

//////////////////////////////////*

/* Return the Index of the First Vowel
Create a function that returns the index of the first vowel in a string.

Examples
firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3

firstVowel("pInEaPPLe") ➞ 1 */

function firstVowel(str) {
	let re = /[aeiou]/i
	return str.search(re)
}

/* Check If It's a Title String
Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

Examples
checkTitle("A Mind Boggling Achievement") ➞ true

checkTitle("A Simple Java Script Program!") ➞ true

checkTitle("Water is transparent") ➞ false */

function checkTitle(title) {
	return title.split(' ')
		.map(el => el[0] == el[0].toUpperCase())
		.includes(false) ? false : true;
}

/* Opposite House 🏘️
Mubashir was walking through a straight street with exactly n identical houses on both sides. House numbers in the street look like this:

1 |   | 6

3 |   | 4

5 |   | 2
He noticed that Even numbered houses increases on the right while Odd numbered houses decreases on the left.

Create a function that takes a house number house and length of the street n and returns the house number on the opposite side.

Examples
oppositeHouse(1, 3) ➞ 6

oppositeHouse(2, 3) ➞ 5

oppositeHouse(3, 5) ➞ 8 */

const oppositeHouse = (house, n) => n*2+1-house


/* Folding a Piece of Paper
Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.

Examples
numLayers(1) ➞ "0.001m"
// Paper folded once is 1mm (equal to 0.001m)

numLayers(4) ➞ "0.008m"
// Paper folded 4 times is 8mm (equal to 0.008m)

numLayers(21) ➞ "1048.576m"
// Paper folded 21 times is 1048576mm (equal to 1048.576m) */

function numLayers(n) {
	let count = 0;
	let i = .0005;
	while(count < n){
		i *= 2;
		count++
	}
	return `${i}m`;
}

