## for of

```js
const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
  console.log(element);
}
```

```js
const greeting = "Hello World!";
for (const greet of greeting) {
  console.log(greet);
}
```

## Maps

```js
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");
// unique values only

console.log(map);

// for of using map
for (const key of map) {
  console.log(key);
}

for (const [key, value] of map) {
  console.log(key, ":-", value);
}
```

## Objects

```js
const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in obj) {
  console.log(key, ":-", obj[key]);
}
// error
// Object not iterable
```

```js
const myObject = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
};

// for in loop
for (const key in myObject) {
  console.log(key, ":-", myObject[key]);
}

// for in on array
const arr = [1, 2, 3, 4, 5];
for (const key in arr) {
  console.log(key);
}
// for in on array will return key or index

// for in on map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

for (const key in map) {
  console.log(key);
}
// not iterable (no output)
```

## forEach

```js
const coding = ["JavaScript", "Python", "Ruby", "Java"];

// arr.forEach(callbackfn)
coding.forEach(function (item) {
  console.log(item);
});

// using arrow function
coding.forEach((item) => {
  console.log(item);
});

// using arrow function with index
coding.forEach((item, index, arr) => {
  console.log(index, ":-", item, ":-", arr);
});

const coding = ["JavaScript", "Python", "Ruby", "Java"];

// arr.forEach(callbackfn)
coding.forEach(function (item) {
  console.log(item);
});

// using arrow function
coding.forEach((item) => {
  console.log(item);
});

// acess to item, index and full array
coding.forEach((item, index, arr) => {
  console.log(index, ":-", item, ":-", arr);
});
```

```js
// forEach on object in array
const coding = [
  {
    lang: "JavaScript",
    file: "js",
  },
  {
    lang: "Python",
    file: "py",
  },
];

coding.forEach((item) => {
  console.log(item.lang, ":-", item.file);
});

// forEach returns undefined
const coding = ["js", "ruby", "python", "java", "c++"];

const values = coding.forEach((item) => {
  // console.log(item)
  return item;
});

console.log(values);

// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);
console.log(newNums);
```
