/* Find longest word length
return the length of longest word in sentence */

/* input: string
output: number */

/* psuedocode: 
create function called longestWord
split input string so that you can loop through array of indivdidual words
create var for index
create var for indexdiff (word.length-index) for if/then statement
return length of index of longestWord  */

function longestWord(string){
  var splitString = string.split(' ');
  var maxLength = 0;

  for(let i = 0; i < splitString.length; i++) {
      console.log(splitString[i])
      if (splitString[i].length > maxLength) {
        console.log('this is maxLength', splitString[i])
        maxLength = splitString[i].length
    }
  }
  return maxLength
}

console.log(longestWord('Go bucks Win the championship'))
