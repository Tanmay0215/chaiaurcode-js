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
  console.log("Hello, " + name);
}
let result = greet("John"); // Hello, John
console.log(result); // undefined
```
