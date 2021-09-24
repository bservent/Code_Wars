/* Add Strings

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0" */

var addStrings = function(num1, num2) {
  let i = num1.length-1,
      j = num2.length-1;
  
  let sum = 0, carry = 0, ans = '';
  
  while(i>=0 || j>=0) {
      sum = carry;
      if(i>=0) sum+= +num1.charAt(i--);
      if(j>=0) sum+= +num2.charAt(j--);
      ans = sum%10 + ans;
      carry = ~~(sum/10);
  }
  
  if(carry) ans = carry + ans;
  
  return ans;
};

console.log(addStrings('1', '2'));

