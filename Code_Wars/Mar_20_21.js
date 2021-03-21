/* Index Shuffle
Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

To illustrate:

indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)
Examples
indexShuffle("abcdefg") ➞ "acegbdf"

indexShuffle("holiday") ➞ "hldyoia"

indexShuffle("maybe") ➞ "myeab"
Notes
0 should be treated as an even number. */

function indexShuffle(str) {
	let odd = '';
	let even = '';
	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 0) {
			even += str[i]
		}else{
			odd += str[i]
		}
	}
	return even + odd
}

/* Is the Number Symmetrical?
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

Examples
isSymmetrical(7227) ➞ true

isSymmetrical(12567) ➞ false

isSymmetrical(44444444) ➞ true

isSymmetrical(9939) ➞ false

isSymmetrical(1112111) ➞ true */

function isSymmetrical(num) {
	const numArr = String(num);
  return numArr.split('').reverse().join('') === numArr;
}

