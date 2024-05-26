# Array

```js
const array = [1, 2, 3, 4, 5];
const array1 = new Array(1, 2, 3, 4, 5);
```

- **JavaScript arrays are resizable** and can contain a mix of different data types.
- **JavaScript arrays are not associative arrays** and so, array elements can be accessed using indexes.
- **JavaScript arrays are zero-indexed**
- **JavaScript array-copy operations create shallow copies**
  - Shallow copies are copies of the original array that contain references to the original array's elements. (Heap)
  - Deep copies are copies of the original array that contain copies of the original array's elements. (Stack)

## Array Methods

- `.push()` - Adds one or more elements to the end
- `.pop()` - Removes the last element
- `.unshift()` - Adds elements to the beginning and shifts the existing elements to right
- `.shift()` - Removes the first element and shifts the existing elements to left
- `.includes()` - Checks if an element is present in the array
- `.indexOf()` - Returns the index of first occurence of given element if not found -1
- `.join()` - Joins all elements of an array into a string
- `.slice()` - Returns a shallow copy of a portion of an array into a new array object
  - parameters: start, end (exclusive)
- `.splice()` - Changes the contents of original array by removing or replacing existing elements

### Array operations

**.push()** to merge two arrays  
**.concat()** - Merges two or more arrays and returns a new array

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
array1.push(array2);
console.log(array1); // [1, 2, 3, [4, 5, 6]]

const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const array5 = array.concat(array4);
console.log(array5); // [1, 2, 3, 4, 5, 6]
```

...spread operator

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3); // [1, 2, 3, 4, 5, 6]
```

flattening an array to single depth

```js
const array = [
  [1, 2],
  [3, 4],
  [[5, 6], 4],
];
const flatArray = array.flat();
console.log(flatArray); // [1, 2, 3, 4, [5, 6], 4]
```

infinity parameter of flat method - flattens nested arrays to any depth

```js
const array = [1, 2, [3, 4, [5, 6]]];
const flatArray = array.flat(Infinity);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
```
array.from() - creates a new, shallow-copied Array instance from an array-like or iterable object

```js
console.log(Array.from("String")); // [ 'S', 't', 'r', 'i', 'n', 'g' ]
console.log(Array.from({name: "hitesh"})); // outputs []

let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3));
```
