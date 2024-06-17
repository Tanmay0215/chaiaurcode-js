## This

`this` is used for **current context**.  
It is used to refer to the **current object**.

```js
const user = {
  username: "hitesh",
  price: 999,
  welcome: function () {
    return `${this.username} Welcome back!`;
  },
};

user.welcome();
```

```js
console.log(this); // outputs {} or the window object in browser
```

> global object in node is `global` and in browser is `window`

```js
function chai() {
  // let username = "hitesh"
  // console.log(this.username); // undefined only works in object not in function
  console.log(this);
}

chai();
```

```js
// anonymous function and this
const user = function () {
  let username = "hitesh";
  console.log(this.username); // undefined
  console.log(this);
};

user();
```

```js
const chai = () => {
  let username = "hitesh";
  console.log(this.username); // undefined
  console.log(this); // {}
};
```

## Arrow Function

```js
const addTwo = (a, b) => {
  return a + b;
};
```

### implicit return

```js
const addTwo = (a, b) => a + b;
const addTwo = (a, b) => a + b;

// to return object using implicit return
const printObj = (a, b) => ({ a, b });
```

### Immediately Invoked Function Expression (IIFE)

> global pollution can be avoided by using IIFE

global pollution is when you define a variable in global scope and it is used by other scripts and it is overwritten by other scripts.

```js
// defining and calling function at the same time

(function iife() {
  console.log("IIFE");
})();

// ; is used to end the statement
// when two IIFE are used together, it is necessary to end the first statement with ;

(() => {
  console.log("IIFE");
})();
```

```js
// ()();

// arrow functions
(() => {
  console.log("IIFE");
})();

// passing arguments
((a, b) => {
  console.log(a + b);
})(2, 3);
```
