/* How Many Decimal Places?
Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.

Examples
getDecimalPlaces("43.20") ➞ 2

getDecimalPlaces("400") ➞ 0

getDecimalPlaces("3.1") ➞ 1 */

function getDecimalPlaces(num) {
  return num.slice(num.indexOf(".")).length -1
}
