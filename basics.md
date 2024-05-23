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
- bigInt
- string => ""
- boolean => true/false
- null - standalone value (defined but null)
- undefined - memory allocated but value not defined
- symbol => unique

`typeof` is used to find data type of the variable  
`typeof or typeof()`  

`console.log(typeof(null))` outputs object
`console.log(typeof(undefined))` outputs defined

## Conversions
using Number before the variable converts it into Number datatype eg.,
```js
let score = "33"
console.log(typeof score)
// outputs string

let value = Number(score)
console.log(typeof value)
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
#### Arithmetic Operators 
```js
console.log("Addition: ", 2 + 2); // outputs 4
console.log("Subtraction: ", 2 - 2); // outputs 0
console.log("Multiplication: ", 2 * 2); // outputs 4
console.log("Division: ", 2 / 2); // outputs 1
console.log("Modulus: ", 2 % 2); // outputs 0
console.log("Exponentiation: ", 2 ** 2); // outputs 4
console.log("Floor division: ", Math.floor(2 / 2)); // outputs 1
```
```js
console.log("1"+"2") // outputs 12
console.log(1+"2") // outputs 12
console.log("1"+2+2) // outputs 122
console.log(1+2+"2") // outputs 32
```
pre and post 
- ++a - update then print(usage) 
- a++ - print(usage) then update

#### Comparison
```js
console.log("Less than: ", 2 < 1); // outputs false
console.log("Greater than: ", 2 > 1); // outputs true
console.log("Less than or equal to: ", 2 <= 1); // outputs false
console.log("Greater than or equal to: ", 2 >= 1); // outputs true
console.log("Equal to: ", 2 == 1); // outputs false
console.log("Not equal to: ", 2!= 1); // outputs true
```

```js
console.log("2">1) // outputs 2
console.log("02">1) // outputs 2
```

unpredictable result as equality and comparsion operators work differently in JS
```js
console.log(null>0) // false
console.log(null==0) // false
console.log(null>=0) // true
```
null is converted to number 0 > 0 // false

+ == compares value and converts both to same datatype and then compare
+ === (strict check) compares value and datatype

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
- Array
- Objects
