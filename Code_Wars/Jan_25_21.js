/* 1/25/21 CodeWars */

//////////////////////////////////*

/* Number Split
Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

Examples
numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4] */

function numberSplit(n) {
	if (n % 2 == 0) {
		return [(n/2), (n/2)]
	}else{
			return [Math.floor(n/2), Math.ceil(n/2)]
	}
}

/* Volume of a Box
Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30 */

function volumeOfBox(sizes) {
	var array = Object.values(sizes)
	return Number(array[0]*array[1]*array[2])
}

/* Return the Total Number of Parameters
Create a function that returns the total number of parameters passed in.

Examples
numberArgs("a", "b", "c") ➞ 3

numberArgs(10, 20, 30, 40, 50) ➞ 5

numberArgs(x, y) ➞ 2

numberArgs() ➞ 0 */

function numberArgs() {
	return arguments.length
}


