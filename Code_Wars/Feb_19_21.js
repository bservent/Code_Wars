//Feb_19_21

///////////////////////////
/* 
Sort by String Length
Create a function that returns an array of strings sorted by length in ascending order.

Examples
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

sortByLength([]) ➞ [] */

function sortByLength(arr) {
	if(arr === []) {
		return arr
	}
		return arr.sort((a,b) => a.length - b.length)
}

/* Pi to N Decimal Places
Given a number n, write a function that returns PI to n decimal places.

Examples
myPi(5) ➞ 3.14159

myPi(4) ➞ 3.1416

myPi(15) ➞ 3.141592653589793 */

const myPi = (n) => Number((Math.PI).toFixed(n))

