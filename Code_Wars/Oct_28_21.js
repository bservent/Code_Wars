//write a function called findVowels that takes in a string 
//function should return vowel count from in the input string

//Input: str
//Output: integer

//psuedocode: take string and split to form an array of the string of characters. And then loop through array of characters and match vowels (a, e, i, o, u). To do this we can write a conditional and then increase a counter variable if matched. 

function findVowels(str) {
  let counter = 0;
  let strSplit = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i <= strSplit.length; i++) {
    if (vowels.includes(strSplit[i])) {
      counter++;
    }
  }
  return counter
}

console.log(findVowels('riva'));