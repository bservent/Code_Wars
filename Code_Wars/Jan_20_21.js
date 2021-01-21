/* 1/20/21 CodeWars */

//////////////////////////////////*

/* Is it Time for Milk and Cookies?
Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Examples
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true */

function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24;
}

/* Word without First Character
Create a function that takes a word and returns the new word without including the first character.

Examples
newWord("apple") ➞ "pple"

newWord("cherry") ➞ "herry"

newWord("plum") ➞ "lum" */

function newWord(str) {
	return str.substring(1)
}

/* Word Numbers!
Create a function that returns a number, based on the string provided. Here is a list of all digits (if you are non english speaker):

String	Number
"one"	1
"two"	2
"three"	3
"four"	4
"five"	5
"six"	6
"seven"	7
"eight"	8
"nine"	9
"zero"	0 */

function word(s) {
	var num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	return num.indexOf(s)
}

/* Number of Stickers
Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.

Pictures of Rubik's Cubes

The Rubik's cube of side length 1 has 6 stickers.
The Rubik's cube of side length 2 has 24 stickers.
The Rubik's cube of side length 3 has 54 stickers.
Examples
howManyStickers(1) ➞ 6

howManyStickers(2) ➞ 24

howManyStickers(3) ➞ 54 */

function howManyStickers(n) {
	return 6*Math.pow(n,2)
}

/* Minimal VI: Ternary Operator
In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

Write a function that returns the strings:

"both" if both given booleans a and b are true.
"first" if only a is true.
"second" if only b is true .
"neither" if both a and b are false.
Tips
If-else statements can be written as a oneliner using Javascript's ternary operator.

For example, the code:

function startswith(name) {
  if ("AEIOU".includes(name[0])) {
    return "vowel"
  } else {
    return "consonant"
  }
}
Can be simplified to:

function startswith(name) {
  return "AEIOU".includes(name[0]) ? "vowel" : "consonant"
} */

const areTrue = (a, b) => a & b ? 'both' : a ? 'first' : b ? 'second': 'neither'

/* Find the Index (Part 1)
Create a function that finds the index of a given item.

Examples
search([1, 5, 3], 5) ➞ 1

search([9, 8, 3], 3) ➞ 2

search([1, 2, 3], 4) ➞ -1 */

const index = (arr, item) => arr.indexOf(item)


