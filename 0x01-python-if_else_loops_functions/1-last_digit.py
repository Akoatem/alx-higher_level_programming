#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
digit = abs(number) % 10
if number < 5:
    digit = digit
    print(f"Last digit of {number:d} is {digit:d} and is ", end="")
elif number > 5:
    print("The number is greater than 5")
    print(f"Last digit of {number:d} is {digit:d} and is ", end="")
elif number == 0:
    print("0")
else:
    print("The number is less than 6 and NOT zero")
