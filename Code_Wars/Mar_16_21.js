/* Even or Odd: Which is Greater?
Create a function to determine if the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits in a string of numbers.

If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
Examples
evenOrOdd("22471") ➞ "Even and Odd are the same"

evenOrOdd("213613") ➞ "Even and Odd are the same"

evenOrOdd("23456") ➞ "Even is greater than Odd" */

function evenOrOdd(str) {
	let oddNums = 0;
	let evenNums = 0;
	for (let i = 0; i <= str.length; i++) {
		if (str[i] % 2 === 0) {
			evenNums += +str[i]
		}else if (str[i] % 2 === 1) {
			oddNums += +str[i]
		}
	}
	if (evenNums > oddNums) {
		return 'Even is greater than Odd';
	}else if (oddNums > evenNums) {
		return 'Odd is greater than Even';
	}else{
		return 'Even and Odd are the same';
	}
};

/* Emotify the Sentence
Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

word	emoticon
smile	:D
grin	:)
sad	:(
mad	:P
Examples
emotify("Make me smile") ➞ "Make me :D"

emotify("Make me grin") ➞ "Make me :)"

emotify("Make me sad") ➞ "Make me :("
Notes
The sentence always starts with "Make me".
Try to solve this without using conditional statements like if/else or switch. */

function emotify(str) {
	const obj = {
		"smile" :	":D",
		"grin" : ":)",
		"sad" :	":(",
		"mad" :	":P"
	};

	newStr = str.split(' ');
	newStr[2] = obj[newStr[2]]
	return newStr.join(' ')
}
