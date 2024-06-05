## Functions

Functions are reusable blocks of code that can be called to perform a specific task. Functions can take parameters and return a value.

```js
function add(a, b) {
  return a + b;
}

// calling function
add(1, 2); // 3
add(1, "2"); // 12
add(1, "a"); // 1a
add(1, null); // 1
```

- **parameters** - (a, b) => variables that store the values that are passed to the function when it is called.
  (1, 2) actual values that are passed to the function when it is called.

### return and undefined

- If a function does not return a value, it returns `undefined`.

```js
function greet(name) {
  // console.log("Hello");
  return "Hello";
  console.log("Hi"); // this line will not be executed (unreachable code)
}

let result = greet(); // Hello
console.log(result); // undefined
```

when returning use console.log to see the output  
undefined in boolean is false  
so use if(!result) instead of if(result === undefined)

```js
// default parameter
function greet(name = "World") {
  return `Hello ${name}`;
}

console.log(greet()); // Hello World
```

### rest parameter

... for multiple parameters  
converts the arguments ti a parameter

```js
// function sum(...args) {
//   return args
// }

function sum(val1, val2, ...args) {
  return args;
}

console.log(sum(1, 2, 3, 4, 5)); // [3, 4, 5]
```

### Handling Objects/Arrays

```js
obj = { name: "Alice", age: 25 };

function handleObject(obj) {
  return `${obj.name} is ${obj.age} years old`;
}

console.log(handleObject(obj)); // Alice is 25 years old
// OR
console.log(handleObject({ name: "Bob", age: 30 })); // Bob is 30 years old
```

## Scopes

{} - scope  
let, const => block scope
var => global scope

> scopes in console is different from that in node

```js
let a = 10;

if (true) {
  let a = 20;
  let b = 20;
  console.log(a); // 20
  console.log(b); // 20
}

console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
```

## Scope level

- Global Scope - variables declared outside of any function or block.
- Block Scope - variables declared inside a block (inside `{}`).

```js
// Nested functions
function outer() {
  let a = 10;

  function inner() {
    let b = 20;
    console.log(a); // 10
  }

  inner();
  console.log(b); // ReferenceError: b is not defined
}
// inner function can access the variables of outer function not vice versa
```

```js
// anonymous function
let greet = function (name) {
  return `Hello ${name}`;
};
// function expression - function is assigned to a variable
```

```js
// anonymous function
greetAnonymous("Alice"); // gives error
let greetAnonymous = function (name) {
  return `Hello ${name}`;
};

greet("Alice"); // Hello Alice
function greet(name) {
  return `Hello ${name}`;
}
// anonymous function can be called only after the function is defined as it is not hoisted
// hoisting - function declaration is hoisted to the top of the code
```
