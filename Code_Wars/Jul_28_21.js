/* Concatenate First and Last Name into One String
Given two strings, firstName and lastName, return a single string in the format "last, first".

Examples
concatName("First", "Last") ➞ "Last, First"

concatName("John", "Doe") ➞ "Doe, John"

concatName("Mary", "Jane") ➞ "Jane, Mary" */

/* function concatName(firstName, lastName) {
  return firstName + ", " + lastName
}

console.log(concatName("Aleutian", "Rain")) */

/* Return the Remainder from Two Numbers
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

Examples
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0 */

function remainder(x,y) {
  return x % y
}

console.log(remainder(4,4))