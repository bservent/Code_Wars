/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false */

const anagram = (a,b) => {
  const isAnagram = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return isAnagram(a)=== isAnagram(b);
};

console.log(anagram('Iceman', 'cinema'));
console.log(anagram('baby', 'bbaby'))

