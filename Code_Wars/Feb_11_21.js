/* 2/11/21 CodeWars */

//////////////////////////////////*

/* RegEx XIV: Group Ranges x|y
Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".

const REGEXP = /blue|red/

"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue

// Matches "blue" in "blue flag" and "red" in "red flag".
Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

Examples
"red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
Notes
Check the Resources tab if you get stuck. */

const REGEXP = /red flag|blue flag/g

/* Burglary Series (20): Sign Your Name
The police send you the electronic statement again for you to sign. This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well. Unfortunately, the document is still protected against new entries...

This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included. Your task is, given an object, prevent new properties from being added to that object, but you should still be able to change the value of the existing properties.

Examples
const obj = { yourSignature: "" }

signYourName( obj ) {
  // write your code here


  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try"
  return obj;

} ➞ { yourSignature: "Whatever" } */

const signYourName = (obj) =>{
	var seal = Object.seal(obj);
  obj.yourSignature = "Whatever";
	obj.spouseSignature = "Nice Try"
  return obj;
}

/* Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array
According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

Examples
dropRight([1, 2, 3]) ➞ [1, 2]

dropRight([1, 2, 3], 2) ➞ [1]

dropRight([1, 2, 3], 5) ➞ []

dropRight([1, 2, 3], 0) ➞ [1, 2, 3] */

dropRight = (a, n = 1) => a.splice(0, a.length - n);