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


/* Sum Fractions
Create a function that takes an array containing nested arrays as an argument. Each subarray has 2 elements. The first element is the numerator and the second element is the denominator. Return the sum of the fractions rounded to the nearest whole number.

Examples
sumFractions([[18, 13], [4, 5]]) ➞ 2

sumFractions([[36, 4], [22, 60]]) ➞ 9

sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]) ➞ 11 */

function sumFractions(arr) {
	return Math.round(arr.map(v=> v[0]/v[1]).reduce((a,v) => a+v))
}

/* Find the Bug: Returning the Container
The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.

The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...

Examples
getContainer("Bread") ➞ "bag"

getContainer("Beer") ➞ "bottle"

getContainer("Candy") ➞ "plastic"

getContainer("Cheese") ➞ null */

function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			container = "bag"
			break;
		case "Beer":
		case "Milk":
			container = "bottle"
			break;
		case "Cerials":
			container = "box"
			break;
		case "Eggs":
			container = "carton"
			break;
		case "Candy":
			container = "plastic"
			break;
		default:
			container = null
  }
  
/* Minimal IX: This or That
Check the principles of minimalist code in the intro to the first challenge.

In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

Write a function that returns the first truthy argument passed to the function. If all arguments are falsy, return the string "not found". The function will be called with a minimum of one and a maximum of four arguments: a, b, c, d.

Tips
The logical OR operator || can be used to assign or return the first truthy value among two or more elements. If no truthy value is found, the last element will be returned.

For example, the code:

function oneOfThese(a, b, c) {
    if (a) return a;
    else if (b) return b;
    else return c;
}       
Can be simplified to:

const oneOfThese = (a, b, c) => a || b || c; */

const firstOne = (a, b = 0, c = 0, d = 0) => a || b || c || d || 'not found'