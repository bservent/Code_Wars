/* 344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character. */

function reverseString(s) {
    let result = [];
    for (let i = s.length - 1; i >= 0; i--){
      result.push(s[i])
    }
    return result
};

console.log(reverseString(["h","e","l","l","o"]))

