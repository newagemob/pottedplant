---
title: "Crash Course: TypeScript"
author: "I.M. Wright"
category: "typescript"
date: "2022-12-22"
bannerImage: "https://pantheon.io/sites/default/files/field/image/TypeScriptImage.jpeg"
tags:
    - "typescript"
    - "programming"
    - "crash course"
    - "tutorial"
    - "beginner"
---

Welcome to this crash course on TypeScript! If you're new to programming or have never used JavaScript before, don't worry - this tutorial will cover the basics you'll need to get started with TypeScript.

## What is TypeScript?

TypeScript is a programming language that is a strict superset of JavaScript. This means that every valid JavaScript program is also a valid TypeScript program. However, TypeScript adds additional features to JavaScript, such as type annotations and interfaces, which can make your code more predictable and easier to understand.

TypeScript is often used in large projects or in environments where code needs to be maintained by multiple developers. It can help catch errors before they happen, making it easier to spot problems in your code and fix them.

## Getting Started with TypeScript

To use TypeScript, you'll need to install it on your computer. You can do this by using the Node Package Manager (npm). If you don't have npm installed, you can download it from the [Node.js website](https://nodejs.org/en/).

If you want to try out TypeScript without installing it on your computer, you can use the [TypeScript Playground](https://www.typescriptlang.org/play). This is a web-based tool that lets you write TypeScript code and see the output.

Once you have npm installed, you can install TypeScript by running the following command:

```bash
npm install -g typescript
```

This will install TypeScript globally on your system.

Next, you'll need to create a TypeScript file. You can do this by creating a new file with the .ts extension. For example, you might create a file called "main.ts".

## TypeScript Basics

TypeScript has a few basic concepts that are important to understand. These include:

Types: In TypeScript, you can specify the type of a variable or function parameter. This helps catch errors where you might be using a variable in a way that is not expected. For example, you might specify that a variable is a number or a string.

Interfaces: An interface is a way of defining the structure of an object. It specifies the properties and methods that an object should have.

Classes: A class is a way of defining a type that can be used to create objects. A class can have properties and methods, and can be extended to create more specific classes.

## Example TypeScript Code

Here's an example of some simple TypeScript code:

```typescript
// Define a type called "Person"
interface Person {
    name: string;
    age: number;
}

// Create a new object of type "Person"
const person: Person = {
    name: "Tyler Durden",
    age: 30
};

// Create a function that takes a "Person" object as a parameter
function printPerson(person: Person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
}

// Call the function
printPerson(person);
```

As you can see, the important parts of this code are the type annotations. These are the parts that specify the type of a variable or function parameter. In this case, we've specified that the "person" variable is of type "Person", and that the "printPerson" function takes a "Person" object as a parameter.

This helps catch errors where you might be using a variable in a way that is not expected. For example, you might specify that a variable is a number or a string.

## TypeScript vs. JavaScript

TypeScript is a superset of JavaScript, which means that every valid JavaScript program is also a valid TypeScript program. However, TypeScript adds additional features to JavaScript, such as type annotations and interfaces like we saw in the example above.

## More Examples

Here's another example of type annotations in TypeScript. This time, we're using a function that takes a string as a parameter and returns a number:

```typescript
function addOne(x: string): number {
    return parseInt(x) + 1;
}

console.log(addOne("1")); // outputs 2
```

Or you can use an interface to define the structure of an object and then create a class that implements that interface:

```typescript
interface Point {
  x: number;
  y: number;
}

class Point2D implements Point {
  x: number;
  y: number;
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

let point = new Point2D(1, 2);
console.log(point.x); // outputs 1
```

The interface defines the structure of the class, and the class implements the interface by providing the properties and methods that are defined in the interface.

## Conclusion

In this tutorial, we've covered the basics of TypeScript. We've seen how to install TypeScript, and how to use it to write simple programs. We've also seen how TypeScript can help catch errors in your code before they happen.

If you want to learn more about TypeScript, you can check out the [TypeScript documentation](https://www.typescriptlang.org/docs/).
