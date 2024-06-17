### Numbers

#### Another method to create a number

`let name = new Number(100);` // on logging it outputs Number : {100}

### Properties

- `toFixed()` - rounds off the number to the specified decimal places
- `toPrecision(2)` - rounds off the number to the specified length

```js
let num1 = 23.8966;
let num2 = 123.8966;
console.log(num1.toPrecision(3)); // outputs 23.9
console.log(num2.toPrecision(3)); // outputs 124
```

- `toLocaleString()` - converts number to locale string format
  - eg: 1234567.89 => 1,234,567.89 as per us standard
  - eg: pass en-IN as argument to get 12,34,567.89 as per indian standard
- `toString()` - converts number to string
- `parseInt("10.5")` - converts string to integer
- `parseFloat("10.5")` - converts string to float
- `Number("10.5")` - converts string to number
- `isNaN("10.5")` - checks if the value is NaN
- `isFinite("10.5")` - checks if the value is finite
- `isInteger("10.5")` - checks if the value is integer

### Some constants in Math object

MAX_VALUE, MIN_VALUE, POSITIVE_INFINITY, NEGATIVE_INFINITY, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, EPSILON, PI, NaN

```js
console.log(Number.MAX_VALUE); // outputs 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // outputs 5e-324
console.log(Number.POSITIVE_INFINITY); // outputs Infinity
console.log(Number.NEGATIVE_INFINITY); // outputs -Infinity

console.log(Number.MAX_SAFE_INTEGER); // outputs 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // outputs -9007199254740991

console.log(Number.EPSILON); // outputs 2.220446049250313e-16
console.log(Number.PI); // outputs 3.141592653589793
console.log(Number.NaN); // outputs NaN
```

```js
let num = 10.5;

console.log(num.toFixed(2)); // outputs 10.50
console.log(num.toPrecision(2)); // outputs 11
console.log(num.toString()); // outputs "10.5"
console.log(parseInt("10.5")); // outputs 10
console.log(parseFloat("10.5")); // outputs 10.5
console.log(Number("10.5")); // outputs 10.5
console.log(isNaN("10.5")); // outputs true
console.log(isFinite("10.5")); // outputs true
console.log(Number.isInteger("10.5")); // outputs false
console.log(Number.isSafeInteger("10.5")); // outputs false
console.log(Number.isSafeInteger(10)); // outputs true
```

---

### Math

- `Math.PI` - value of PI
- `Math.round(2.4)` - rounds to nearest integer
- `Math.ceil(2.4)` - rounds to next integer
- `Math.floor(2.4)` - rounds to previous integer
- `Math.sqrt(16)` - square root
- `Math.abs(-4)` - absolute value
- `Math.pow(2, 3)` - 2 to the power of 3
- `Math.min(2, 3, 4)` - minimum value
- `Math.max(2, 3, 4)` - maximum value
- `Math.random()` - random number between 0 and 1
- `Math.floor(Math.random() * 10)` - random number between 0 and 9

```js
console.log(Math); // outputs Math object

console.log(Math.PI); // outputs 3.141592653589793
console.log(Math.round(2.4)); // outputs 2
console.log(Math.ceil(2.4)); // outputs 3
console.log(Math.floor(2.4)); // outputs 2
console.log(Math.sqrt(16)); // outputs 4
console.log(Math.abs(-4)); // outputs 4
console.log(Math.pow(2, 3)); // outputs 8
console.log(Math.min(2, 3, 4)); // outputs 2
console.log(Math.max(2, 3, 4)); // outputs 4
console.log(Math.random()); // outputs random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // outputs random number between 0 and 9
```

```js
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * 10) + 1); // outputs random number between 1 and 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // outputs random number between 10 and 20
```
