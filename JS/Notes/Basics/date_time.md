# Date and Time

Proposal for a global module to handle date and time - **Temporal**

> the epoch - Jan 1, 1970 00:00:00 UTC

```js
let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

const myCreatedDate = new Date(2023, 0, 23);
// in js month starts from 0
console.log(myCreatedDate.toDateString());

// timestamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);
// outputs the number of milliseconds passed since the epoch

// use the difference between two timestamps to find time taken by a function to execute
console.log(myTimeStamp - myCreatedDate);

// get the time in seconds
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
newDate.toLocaleString("default", {
  weekday: "long",
});
```
