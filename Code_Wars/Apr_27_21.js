//given a string s that consist of some words separated by spaces
//return the length of the last word in the string
//if the last word does not exist return 0
//word = substring with no space characters

/* Example 1:

Input: s = "Hello World"
Output: 5

Example 2:
Input: s = " "
Output: 0 */

//psuedocode
//create function called lengthOfLast() that takes in string of words
//loop through backwards string of words and write condition that matches white space variable
//return index number
//write an if statement to cover the edgecase: if string = ' ' then return 0

function lengthOfLast(string) {
  let lastWordCounter = 0
  const whiteSpaceStr = ' '
  for (let i = string.length - 1; i >= 0; i--) {
    if(string[i] !== whiteSpaceStr) {
      lastWordCounter ++
    } else if (string[i] == whiteSpaceStr) {
      return lastWordCounter
    } 
  }
}

console.log(lengthOfLast("This is me"))

