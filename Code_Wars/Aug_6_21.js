/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1 */

/**
 * @param {string} s
 * @return {number}
 */

 function firstUniqChar(s) {
    const map = {}
    for(let i = 0; i< s.length; i++){
        map[s[i]] =  map[s[i]] || 0;
        map[s[i]]++;
        console.log(map)
    }
    
    for(let i = 0; i< s.length; i++){
        if(map[s[i]] == 1) 
        return s.indexOf(s[i]);
    }
  return -1 
};

console.log(firstUniqChar("leetcode"))
