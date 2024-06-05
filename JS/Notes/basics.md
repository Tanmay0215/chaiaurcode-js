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
