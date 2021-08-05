/* 412. Fizz Buzz
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.
 

Example 1:
Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"] */

/**
 * @param {number} n
 * @return {string[]}
 */

function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    console.log(i)
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    }else if(i % 3 === 0) {
      result.push("Fizz");
    }else if(i % 5 === 0) {
      result.push("Buzz");
    }else{ 
      result.push(i.toString());
    }
  }
  return result
};

console.log(fizzBuzz('16'))

/* 231. Power of Two

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

 

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16 */

var isPowerOfTwo = function(n) {
  if (n % 1 !== 0 || n < 1) return false;
  if (n === 1) return true;

  return isPowerOfTwo(n / 2);
};

console.log(powerOfTwo(16));