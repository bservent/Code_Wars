/* 1/12/21 CodeWars */

//////////////////////////////////*

/* String to Integer and Vice Versa
Write two functions:

toInt() : A function to convert a string to an integer.
toStr() : A function to convert an integer to a string.
Examples
toInt("77") ➞ 77

toInt("532") ➞ 532

toStr(77) ➞ "77"

toStr(532) ➞ "532" */

function toInt(str) {
	return parseInt(str)
}

function toStr(int) {
	return int.toString()
}

/* Pair Management
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215] */

function makePair(num1, num2) {
	var arr = []
	arr.push(num1, num2)
	return arr
}

/* Area of a Rectangle
Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

Examples
area(3, 4) ➞ 12

area(10, 11) ➞ 110

area(-1, 5) ➞ -1

area(0, 2) ➞ -1 */

function area(h, w) {
	if (h > 0 && w > 0) {
		return h * w
	}else{
		return -1
	}
}

