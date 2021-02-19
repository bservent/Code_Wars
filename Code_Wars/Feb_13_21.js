/* 2/12/21 CodeWars */

//////////////////////////////////*

/* Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

Examples
inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}) ➞ 10

inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}) ➞ 432

inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
}) ➞ 0 */

function inkLevels(inks) {
  return Math.min(...Object.values(inks))
}

/* Return Types
Create a function that takes an array and returns the types of values (data types) in a new array.

Examples
arrayValuesTypes([1, 2, "null", []])
➞ ["number", "number", "string", "array"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
➞ ["string", "boolean", "boolean", "number", "number", "array", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
➞ ["number", "string", "string", "array", "object", "boolean", "number"] */

function arrayValuesTypes(arr) {
	let a = []
	for (i=0; i<arr.length; i++) {
		a.push(typeof arr[i])
	}
	return a
}

