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

`console.log(typeof(null))` outputs object
`console.log(typeof(undefined))` outputs undefined
rest all give expected output

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
```

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

both a and b are changed as both are pointing to the same reference
---
## Strings

#### Another method to create a string

`let name = new String("John");`

### Concatenation

using string interpolation  
`` - backticks

```js
let name = "John";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old`);
```

indexes start from 0

```js
let name = "John";
console.log(name[0]); // outputs J
console.log(name.__proto__); // outputs String
```

### Properties

- `length` - length of the string
- `toUpperCase()` - converts to uppercase
- `toLowerCase()` - converts to lowercase
- `indexOf("a")` - index of first occurence of a
- `lastIndexOf("a")` - index of last occurence of a
- `charAt(0)` - character at index 0
- `includes("a")` - returns true if a is present in the string
- `startsWith("a")` - returns true if string starts with a
- `endsWith("a")` - returns true if string ends with a
- `split(" ")` - splits the string based on the delimiter
- `replace("a", "b")` - replaces a with b
- `repeat(2)` - repeats the string 2 times
- `trim()` - removes white spaces from the start and end of the string
- `trimStart()` - removes white spaces from the start of the string
- `trimEnd()` - removes white spaces from the end of the string
- `padStart(10, "a")` - adds a at the start of the string to make it 10 characters long
- `padEnd(10, "a")` - adds a at the end of the string to make it 10 characters long
- `substring(1, 3)` - returns the substring from index 1 to 3
- `slice(1, 3)` - returns the substring from index 1 to 3

```js
let name = "John";

console.log(name.length); // outputs 4
console.log(name.toUpperCase()); // outputs JOHN
console.log(name.toLowerCase()); // outputs john
console.log(name.indexOf("o")); // outputs 1
console.log(name.lastIndexOf("o")); // outputs 2
console.log(name.charAt(0)); // outputs J
console.log(name.includes("o")); // outputs true
console.log(name.startsWith("J")); // outputs true
console.log(name.endsWith("n")); // outputs true
console.log(name.split("")); // outputs ["J", "o", "h", "n"]
console.log(name.replace("J", "A")); // outputs Aohn
console.log(name.repeat(2)); // outputs JohnJohn
console.log(name.trim()); // outputs John
console.log(name.trimStart()); // outputs John
console.log(name.trimEnd()); // outputs John
console.log(name.padStart(10, "a")); // outputs aaaaaaaJohn
console.log(name.padEnd(10, "a")); // outputs Johnaaaaaa
console.log(name.substring(1, 3)); // outputs "oh"
console.log(name.slice(1, 3)); // outputs "oh"
```

#### Negative slicing

```js
let name = "John";
console.log(name.slice(-3, -1)); // outputs "oh"
console.log(name.substring(-3, -1)); // no output
// only slice follows neagative slicing
```

```js
const url = "https://www.google.com/hitesh%20choudhary";
// %20 - represents space

console.log(encodeURI(url)); // outputs https://www.google.com/hitesh%20choudhary
console.log(decodeURI(url)); // outputs https://www.google.com/hitesh choudhary
```

---

### Numbers

#### Another method to create a number

`let name = new Number(100);` // on logging it outputs Number : {100}

### Properties

- `toFixed()` - rounds off the number to the specified decimal places
- `toPrecision(2)` - rounds off the number to the specified length
  ```js
  let num = 10.5;
  console.log(num.toFixed(2)); // outputs 10.50
  console.log(num.toPrecision(2)); // outputs 11
  ```
- `toString()` - converts number to string
- `parseInt("10.5")` - converts string to integer
- `parseFloat("10.5")` - converts string to float
- `Number("10.5")` - converts string to number
- `isNaN("10.5")` - checks if the value is NaN
- `isFinite("10.5")` - checks if the value is finite
- `isInteger("10.5")` - checks if the value is integer
- `isSafeInteger("10.5")` - checks if the value is safe integer

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
console.log(Math.PI); // outputs 3.141592653589793
console.log(Math.round(2.4)); // outputs 2
consoleconsole.log(Math.ceil(2.4)); // outputs 3
console.log(Math.floor(2.4)); // outputs 2
console.log(Math.sqrt(16)); // outputs 4
console.log(Math.abs(-4)); // outputs 4
console.log(Math.pow(2, 3)); // outputs 8
console.log(Math.min(2, 3, 4)); // outputs 2
console.log(Math.max(2, 3, 4)); // outputs 4
console.log(Math.random()); // outputs random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // outputs random number between 0 and 9
```
