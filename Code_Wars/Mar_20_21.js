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

