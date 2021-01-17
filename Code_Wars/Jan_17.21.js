/* 1/17/21 CodeWars */

//////////////////////////////////*

/* Applying Discounts
Create a function that applies a discount d to every number in the array.

Examples
getDiscounts([2, 4, 6, 11], "50%") ➞ [1, 2, 3, 5.5]

getDiscounts([10, 20, 40, 80], "75%") ➞ [7.5, 15, 30, 60]

getDiscounts([100], "45%") ➞ [45] */

function getDiscounts(nums, d) {
	return nums.map(x => x * (parseInt(d) / 100));
}

/* ES6: Destructuring Arrays I
You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2
With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2. */

const arr = [1, 2, 3, 4, 5, 6]

let a, b;
({a, b} = {a: 1, b:2});

/* Is the String Odd or Even?
Given a string, return true if its length is even or false if the length is odd.

Examples
oddOrEven("apples") ➞ true

oddOrEven("pears") ➞ false

oddOrEven("cherry") ➞ true */

function oddOrEven(s) {
	if (s.length % 2 == 0 ) {
		return true
	}else{
		return false
	}
}
