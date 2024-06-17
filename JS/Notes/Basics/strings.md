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
