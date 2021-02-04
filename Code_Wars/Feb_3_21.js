/* 2/3/21 CodeWars */

//////////////////////////////////*

/* Sum of Cubes
Create a function that takes in an array of numbers and returns the sum of its cubes.

Examples
sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes([3, 4, 5]) ➞ 216

sumOfCubes([2]) ➞ 8

sumOfCubes([]) ➞ 0 */

const sumOfCubes = nums => {
	return nums.reduce((sum, num) => {
		return sum + Math.pow(num,3);
	},0)
}

/* Sum of Resistance in Parallel Circuits
If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

1/RTotal = 1/R1 + 1/R2 + 1/R3 ...

Create a function that takes an array of resistance values, and calculates the total resistance of the circuit. */

function parallelResistance(arr) {
	var num = arr.reduce((a,b,c) => 1/(1/a + 1/b))
	return Number(num.toFixed(1))
}

/* Tuck in Array
Create a function that takes two arrays and insert the second array in the middle of the first array.

Examples
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]] */

const tuckIn = (arr1, arr2) => [arr1[0], ...arr2, arr1[1]]



