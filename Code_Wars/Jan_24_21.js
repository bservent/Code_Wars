/* 1/24/21 CodeWars */

//////////////////////////////////*

/* Iterated Square Root
The iterated square root of a number is the number of times the square root function must be applied to bring the number strictly under 2.

Given an integer, return its iterated square root. Return "invalid" if it is negative.

Examples
iSqrt(1) ➞ 0

iSqrt(2) ➞ 1

iSqrt(7) ➞ 2

iSqrt(27) ➞ 3

iSqrt(256) ➞ 4

iSqrt(-1) ➞ "invalid" */

function iSqrt(n) {
	if (n < 0) {
		return 'invalid'
	}
	let count = 0
	while (n >= 2) {
		n = Math.sqrt(n)
		count++
	}
	return count
}

/* Convert an Array to a String
Create a function that takes an array of numbers or letters and returns a string.

Examples
arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA" */

function arrayToString(arr) {
	return arr.join('')
}

/* Find the Other Two Side Lengths
Given the shortest side of a 30 60 90 triangle you have to find out the other 2 sides, (return the longest side, medium-length side).

Examples
otherSides(1) ➞ [2, 1.73]

otherSides(2) ➞ [4, 3.46]

otherSides(3) ➞ [6, 5.2]
Notes
30 60 90 triangles always follow this rule, let's say the shortest side length is x units, the hypotenuse would be 2x units and the other side would be x * root3 units.
In the Tests, the decimal is rounded to 2 places.
Return the values as an array. */

const otherSides = l => [l*2, +(l*Math.sqrt(3)).toFixed(2)]

