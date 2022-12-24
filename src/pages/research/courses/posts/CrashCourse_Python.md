---
title: "Crash Course: Python"
author: "I.M. Wright"
category: "python"
date: "2022-12-22"
bannerImage: "https://external-preview.redd.it/-6xcAskXStmXnuU8GNnNakcxmp8iVRXIdQIr1RLtss8.png?width=640&crop=smart&auto=webp&s=343676499fc540bc543ee6499e19db232ac80aba"
tags:
    - "python"
    - "programming"
    - "crash course"
    - "tutorial"
    - "beginner"
---

Python is a high-level, interpreted programming language that is widely used for web development, data analysis, artificial intelligence, and scientific computing. It is known for its simplicity, readability, and flexibility, which make it an ideal choice for beginners and experienced programmers alike.

_Here is a crash course on Python to get you started:_

## Basics

Python is a dynamically-typed language, which means that you don't have to specify the data type of a variable when you declare it. You can create a variable simply by assigning a value to it:

```python
x = 10
y = "His name was Robert Paulson."
z = [1, 2, 3]
```

You can also use the print() function to print out the value of a variable:

```python
print(x)  # Output: 10
print(y)  # Output: His name was Robert Paulson.
print(z)  # Output: [1, 2, 3]
```

## Data types

Python has several built-in data types, including integers, floating-point numbers, strings, lists, and dictionaries.

An integer is a whole number, such as 1, 2, or 3. A floating-point number is a number with a decimal point, such as 3.14 or 2.718.

A string is a sequence of characters, such as "Hello" or "Python is fun!". You can use single or double quotes to define a string, but you must use the same type of quotes to start and end the string.

A list is an ordered collection of items, such as [1, 2, 3] or ['a', 'b', 'c']. Lists are mutable, which means you can change their values after they have been created.

A dictionary is a collection of key-value pairs, such as {'name': 'Tyler Durden', 'age': 30}. Dictionaries are also mutable.

## Operators

Python has several operators that you can use to perform operations on variables and values.

Typical mathematical operators include + (addition), - (subtraction), * (multiplication), and / (division). You can also use the ** operator to raise a number to a power:

```python
x = 10
y = 20
z = x + y
print(z)  # Output: 30

x = 2
y = 3
z = x ** y
print(z)  # Output: 8
```

Python also has comparison operators, such as < (less than), > (greater than), <= (less than or equal to), and >= (greater than or equal to). These operators return a Boolean value, which is either True or False:

```python
x = 10
y = 20
z = x < y
print(z)  # Output: True

x = 10
y = 20
z = x >= y
print(z) # Output: False
```

## Control Structures

Control structures are used to control the flow of execution in a program. Python has several control structures, including if statements, for loops, and while loops.

An if statement is used to execute a block of code if a certain condition is met:

```python
x = 10
if x > 5:
  print("x is greater than 5")
```

A for loop is used to iterate over a sequence of items, such as a list or a string:

```python
for i in range(5):
  print(i)
```

A while loop is used to execute a block of code repeatedly until a certain condition is met:

```python
x = 0
while x < 5:
  print(x)
  x += 1
```

## Functions

Functions are used to group a block of code together so that it can be executed multiple times. You can define a function using the def keyword:

```python
def hi_pi():
  x = 3.14
  print("Hi", x)
```

You can call a function by using its name followed by parentheses:

```python
hi_pi()  # Output: Hi 3.14
```

## Parameters

Functions can also take parameters, which are used to pass values to the function. You can define parameters by specifying them in parentheses after the function name:

```python
def hi_pi(x):
  print("Hi", x)
```

You can call a function with parameters by specifying the values in parentheses after the function name:

```python
hi_pi(3.14)  # Output: Hi 3.14
```

## Classes

Classes are used to create user-defined data structures. These are also known as custom data types. The difference between a class and an object is that a class is a blueprint for an object, while an object is an instance of a class. You can define a class using the class keyword:

```python
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def say_hi(self):
    print("Hi, my name is", self.name)
```

You can create an object from a class by using the class name followed by parentheses:

```python
p1 = Person("Tyler Durden", 30)
p2 = Person("Marla Singer", 25)
```

You can access the attributes of an object using the dot operator:

```python
print(p1.name)  # Output: Tyler Durden
print(p2.age)  # Output: 25
```

You can also call the methods of an object using the dot operator:

```python
p1.say_hi()  # Output: Hi, my name is Tyler Durden
p2.say_hi()  # Output: Hi, my name is Marla Singer
```

## Modules

Modules are used to organize code into files. You can import a module using the import keyword:

```python
import math
```

You can access the functions and attributes of a module using the dot operator:

```python
print(math.pi)  # Output: 3.141592653589793
```

## Conclusion

While it might seem a bit overwhelming, take your time to go over these fundamentals and research these topics. Python is extremely powerful and can be used to create anything from a simple calculator to a complex web application. You can also use Python to automate tasks, such as downloading files from the internet or sending emails. The possibilities are endless!
