/* 2/1/21 CodeWars */

//////////////////////////////////*
/* Return the Highest and Lowest Numbers
Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

Examples
highLow("1 2 3 4 5") ➞ "5 1"

highLow("1 2 -3 4 5") ➞ "5 -3"

highLow("1 9 3 4 -5") ➞ "9 -5"

highLow("13") ➞ "13 13" */

function highLow(str) {
	var nums = str.split(' ')
	return [Math.max(...nums), Math.min(...nums)].join(' ')
}

/* What's Hiding Amongst the Crowd?
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
Examples
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement" */

function detectWord(str) {
	return str.match(/[a-z]/g).join('');
}

/* Largest Swap
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

To illustrate:

largestSwap(27) ➞ false

largestSwap(43) ➞ true
If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

Examples
largestSwap(14) ➞ false

largestSwap(53) ➞ true

largestSwap(99) ➞ true */

function largestSwap(num) {
	return num >= +num.toString().split("").reverse().join("");
}