# While Loops

```js
let index = 0;
while (index <= 10) {
  console.log(index);
  index = index + 2;
}
```

While loop on array

```js
let index = 0;

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

while (index < myArray.length) {
  console.log(myArray[index]);
  index++;
}
```

Do while loop

```js
// let score = 1;
let score = 11;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
```

runs the loop at least once, even if the condition is false.
