# Loops/Iterations

## For Loops

```js
for (let i = 0; i <= 10; i++) {
  const element = i;
  console.log(element);
}
```

### Conditional statement in for loop

```js
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number");
  }
  console.log(element);
}
```

### Nested Loops

```js
for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop ${j} , Outer loop ${i}`);
  }
}
```

Loops on arrays

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

out of bound outputs undefined

### break and continue

break - exit the loop
continue - skip the current iteration

```js
for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log("Detected 5");
    break;
  }
  console.log(i);
}
```
