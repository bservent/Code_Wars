""" /* 1/27/21 CodeWars */

//////////////////////////////////*

Sum of Odd and Even Numbers
Write a function that takes a list of numbers and returns a list with two elements:

The first element should be the sum of all even numbers in the list.
The second element should be the sum of all odd numbers in the list.
Example
sum_odd_and_even([1, 2, 3, 4, 5, 6]) ➞ [12, 9]
# 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9

sum_odd_and_even([-1, -2, -3, -4, -5, -6]) ➞ [-12, -9])

sum_odd_and_even([0, 0]) ➞ [0, 0]) """

def sum_odd_and_even(lst):
	even = 0
	odd = 0
	for i in lst:
		if i % 2 == 0:
			even += i
		else:
			odd += i
	return [even,odd]

""" Area of a Triangle
Write a function that takes the base and height of a triangle and return its area.

Examples
tri_area(3, 2) ➞ 3

tri_area(7, 4) ➞ 14

tri_area(10, 10) ➞ 50
Notes
The area of a triangle is: (base * height) / 2
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. """

def tri_area(base,height):
    return base*height/2

""" Convert Hours into Seconds
Write a function that converts hours into seconds.

Examples
how_many_seconds(2) ➞ 7200

how_many_seconds(10) ➞ 36000

how_many_seconds(24) ➞ 86400 """

def convert_hours(hrs):
    return hrs * 60 * 60

""" Return the Sum of Two Numbers
Create a function that takes two numbers as arguments and return their sum.

Examples
addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10 """

def addition(x,y)
    return x + y

""" Return the Factorial
Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

Examples
factorial(3) ➞ 6

factorial(5) ➞ 120

factorial(13) ➞ 6227020800 """

import math

def factorial(num):
	return math.factorial(num)

""" Radians to Degrees
Create a function that takes an angle in radians and returns the corresponding angle in degrees rounded to one decimal place.

Examples
radians_to_degrees(1) ➞ 57.3

radians_to_degrees(20) ➞ 1145.9

radians_to_degrees(50) ➞ 2864.8 """

from math import pi
def radians_to_degrees(rad):
  return round(rad*180/pi,1)

""" Count Ones in Binary Representation of Integer
Count the amount of ones in the binary representation of an integer. For example, since 12 is 1100 in binary, the return value should be 2.

Examples
count_ones(0) ➞ 0

count_ones(100) ➞ 3

count_ones(999) ➞ 8 """

def count_ones(num):
	return bin(num).count('1')

""" How Many Vowels?
Create a function that takes a string and returns the number (count) of vowels contained within it.

Examples
count_vowels("Celebration") ➞ 5

count_vowels("Palm") ➞ 1

count_vowels("Prediction") ➞ 4 """

def count_vowels(txt):
	cnt = 0
	for element in txt:
		if element in 'aeiou':
			cnt += 1
	return cnt

""" Default Mood
Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

Examples
mood_today("happy") ➞ "Today, I am feeling happy"

mood_today("sad") ➞ "Today, I am feeling sad"

mood_today() ➞ "Today, I am feeling neutral" """

def mood_today(mood = 'neutral'):
	return "Today, I am feeling " + mood




