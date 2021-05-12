/* 58. Length of Last Word
Easy

1099

3175

Add to List

Share
Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Example 2:

Input: s = " "
Output: 0
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '. */

s = "Hello World"
var lengthOfLastWord = function(s) {
    let words = s.split(' ')
    let lastWord = words[words.length-1].length
    return lastWord
};
