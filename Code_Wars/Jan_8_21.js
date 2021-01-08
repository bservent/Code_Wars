1/8/21 CodeWars

//////////////////////////////////*

/* Convert Hours into Seconds
Write a function that converts hours into seconds. */

/* Examples
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400 */

/* Notes
60 seconds in a minute, 60 minutes in an hour
Don't forget to return your answer. */

function howManySeconds(hours) {
  return hours * 60 * 60
}

//////////////////////////////////*

/* Return the Sum of Two Numbers
Create a function that takes two numbers as arguments and return their sum.
 */

/* Examples
addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10 */

/* Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

function sumOfNumbers(a, b) {
  return a + b
}

//////////////////////////////////*

/* Maximum Edge of a Triangle
Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

Examples
nextEdge(8, 10) ➞ 17

nextEdge(5, 7) ➞ 11

nextEdge(9, 2) ➞ 10

Notes
(side1 + side2) - 1 = maximum range of third edge.
The side lengths of the triangle are positive integers.
Don't forget to return the result. */

function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}

//////////////////////////////////*