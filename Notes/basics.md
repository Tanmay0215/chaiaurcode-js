# JS Basics

## Output

- `console.log()` - output/logging
- `console.table([1,2])` - output/logging in table format

## Variables

- `const`, `var`, `let` - defining variables
  - **var**: function scope, can be reassigned and redeclared
  - **let**: block scope, can be reassigned but not redeclared
  - **const**: block scope, cannot be reassigned or redeclared, but properties/elements of objects/arrays can be modified.
- also can be defined without const, var, let
- only initialised var is stores as undefined
- **Prefer not to use var**

alert() and prompt() cannot be used in node

## Datatypes

- number - 2 to power 53
- bigInt - stores number bigger than 2 to power 53
- string => ""
- boolean => true/false
- null - standalone value (defined but null)
- undefined - memory allocated but value not defined
- symbol => unique

bigInt - add n at the end of number converts it into a bigInt

`typeof` is used to find data type of the variable  
`typeof or typeof()`

### typeof exceptions

- `console.log(typeof(null))` outputs object
- `console.log(typeof(undefined))` outputs undefined
- rest all give expected output

## Conversions

using Number before the variable converts it into Number datatype eg.,

```js
let score = "33";
console.log(typeof score);
// outputs string

let value = Number(score);
console.log(typeof value);
// outputs Number
```

#### Others to Number

When the var to be converted is

- not of Number type(eg: "33abc" or "abc") then it is converted to NaN
- null is converted to 0 and undefined to NaN
- true to 1 and false to 0
- NaN - Not a Number => outputs typeof - Number

---

- "33" => 33
- "33abc" => NaN
- true => 1, false => 0

#### Others to Boolean

- 1 => true, 0 => false
- "" => false
- "abc" => true

---

- String(null) => null
- String(undefined) => undefined

## Operations

### Arithmetic Operators

```js
console.log(2 + 2); // outputs 4
console.log(2 - 2); // outputs 0
console.log(2 * 2); // outputs 4
console.log(2 / 2); // outputs 1
console.log(2 % 2); // outputs 0
console.log(2 ** 2); // outputs 4
console.log(Math.floor(2 / 2)); // outputs 1
```

```js
console.log("1" + "2"); // outputs 12
console.log(1 + "2"); // outputs 12
console.log("1" + 2 + 2); // outputs 122
console.log(1 + 2 + "2"); // outputs 32
```

#### pre and post

- ++a - update then print(usage)
- a++ - print(usage) then update

### Comparison

```js
console.log(2 < 1); // outputs false
console.log(2 > 1); // outputs true
console.log(2 <= 1); // outputs false
console.log(2 >= 1); // outputs true
console.log(2 == 1); // outputs false
console.log(2 != 1); // outputs true
```

```js
console.log("2" > 1); // outputs 2
console.log("02" > 1); // outputs 2
```

unpredictable result as equality and comparsion operators work differently in JS

```js
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
```

null is converted to number 0 > 0 // false

- == compares value and converts both to same datatype and then compare
- === (strict check) compares value and datatype

### Primitve

7 types of primitive datatypes  
when passed in function a copy is created and copy is changed

- String
- Number
- Boolean
- null
- undefined
- Symbol
- BigInt

> when function is logged but it is not returning anything it returns undefined

````js

### Non-Primitive (Reference)

- Array - list of items
- Objects - key-value pair
- Functins

### Dynamically and Statically typed languages

- JS is a dynamically typed languaga
- In dynamically typed languages the type of the variable is determined at runtime
- In statically typed languages the type of the variable is determined at compile time

## Symbols

- It is used to create unique identifiers.
- Symbols are immutable and unique.
- They can be used as property keys in objects.

```js
// Example:
const id1 = Symbol("123");
const id2 = Symbol("123");

console.log(typeof id1, typeof id2); // outputs "symbol"
console.log(id1 === id2); // outputs false
// above output shows that symbol is unique
````

## Memory in JS

> **Stack** memory (Primitive datatype) - a copy of value is created when it is passed into another variable

```js
let a = 10;
let b = a;
a = 20;
console.log(b); // outputs 10
```

only a is changed and b remains unchanged as it is the copy of a not the original value of a

> **Heap** memory (Non tive datatype) - original value (reference) is passed when it is passed into another variable

```js
let a = [1, 2, 3];
let b = a;
a[0] = 10;
console.log(b); // outputs [10, 2, 3]
```

## both a and b are changed as both are pointing to the same reference


---

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
