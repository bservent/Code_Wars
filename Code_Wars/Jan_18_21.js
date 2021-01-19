/* 1/18/21 CodeWars */

//////////////////////////////////*

/* Maximum Possible Total
Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

Examples
maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43

maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100

maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40 */

function maxTotal(nums) {
	var array1 = nums.sort((a, b) => a - b)
	var array2 = array1.slice(5,10)
	var array3 = array2.reduce((a, b) => a + b)
	return array3
}

/* Flip the Boolean
Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.

Create a function that returns the opposite of the given boolean, as a number.

Examples
flipBool(true) ➞ 0

flipBool(false) ➞ 1

flipBool(1) ➞ 0

flipBool(0) ➞ 1 */

function flipBool(b) {
	if(b == false || 0) {
		return 1
	}else{
		return 0
	}
}

/* Profitable Gamble
Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

Examples
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true */

function profitableGamble(prob, prize, pay) {
	if (prob * prize > pay) {
		return true
	}else{
		return false
	}
}
