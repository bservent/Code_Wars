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