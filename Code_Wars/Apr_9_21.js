/* Count the Capital Letters
Given a string of letters, how many capital letters are there?

Examples
capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6

capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14

capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0 */

function capitalLetters(str) {
	let count = 0;
	let splitStr = str.split('');
	let regex = /[A-Z]/g
	for(let i=0; i < splitStr.length; i++) {
		if(splitStr[i] == splitStr[i].match(regex)) {
			count++;
		}
	}
	return count
}