## Filter

```js
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

## Map

```js
const myNum = [1, 2, 3, 4, 5];
const add10 = myNums.map((num) => num + 10);

console.log(add10);
```

### Chaining

```js
const myNum = [1, 2, 3, 4, 5];

const operation = myNum
  .map((num) => num * 10)
  .map((num) => num > +5)
  .filter((num) => num > 15);

console.log(operation);
```

#### Practical Example

```js
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre === "History");
userBooks = books.filter(
  (book) => book.publish > 2000 && book.genre === "Science"
);
console.log(userBooks);
```

## Reduce

`.reduce(accumulator, currentValue), initialValue`

```js
const myNums = [1, 2, 3];
// accumulator - acc, currval - current value
const sum = myNums.reduce((acc, currval) => {
  console.log(acc, currval);
  return acc + currval;
}, 0);
// 0 is the initial value of acc

console.log(sum);
```

#### Practical Example

```js
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
```
