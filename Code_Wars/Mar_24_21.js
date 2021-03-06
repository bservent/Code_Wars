/* Hashes and Pluses
Create a function that returns the number of hashes and pluses in a string.

Examples
hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0]
Notes
Return [0, 0] for an empty string.
Return in the order of [hashes, pluses]. */

function hashPlusCount(str) {
	let plus = 0
	let hash = 0
	for(let i = 0; i <= str.length; i++)
		if(str[i] === '+') {
			 plus++;
		}else if (str[i] === '#') {
			 hash++;
			 }
	return [hash, plus]
		}

/*     Return the Factorial
    Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.
    
    Examples
    factorial(3) ➞ 6
    
    factorial(5) ➞ 120
    
    factorial(13) ➞ 6227020800 */

    function factorial(int) {
      if (int == 0) {
        return 1;
      }else {
        return (int * factorial(int - 1));
      }
    }