# Control flow statements

## if-else block

if statement is true then `if` block will execute otherwise `else` block will execute.

`==, ===, !=, !==, >, <, >=, <=`

```js
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
```

```js
const isUserOffline = true;

// ! is used to invert the boolean value
if (!isUserOffline) {
  console.log("Welcome User");
} else {
  console.log("Please connect to the internet");
}
```

if a variable is defined inside if block and you want to use it outside

```js
const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`You have super power to ${power}`);
}

console.log(`Your power is ${score}`);
```

```js
const balance = 1000;
if (balance>500) console.log("You have enough balance");

if (balance<500) console.log("You don't have enough balance"),
console.log("Please add money to your account");
// don't use this, it's not readable
```

### else-if block

```js
const balance = 1000;

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}
```
#### checking multiple conditions

```js
const userLoggedIn = true;
const debitCard = true;

// and operator - &&
if(userLoggedIn && debitCard ){
  console.log("You can make a payment");
}

| - pipe operator
// or operator - ||
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && (loggedInFromGoogle || loggedInFromEmail)){
  console.log("You are logged in");
}
```
### switch-case block

```js
// Syntax
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block
}
```

```js
// switch case with month as case and log the name of month
const month = 2;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("Invalid month");
}
```
break statement is used to exit the switch block.
if not used then it will execute all the cases after the matching case except the default case.

**truthy value** - any value that is not falsy eg: "0", 'false', " ", [], {}, function(){}  
**falsy values** - 0, -0, BigInt 0n, null, undefined, NaN, false, ""

```js
const userEmail = []

if(userEmail){
  console.log("Email is present");
}else{
  console.log("Email is not present");
}
```

```js
const userEmail = []
// to check if the email is not present
if (userEmail.length === 0){
  console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
  console.log("Object is empty");
}
```

**Nullish coalescing operator** `??` - it checks for null or undefined values

```js
let val1;
val1 = 5 ?? 10
console.log(val1) // 5
val1 = null ?? 10
console.log(val1) // 10
val1 = null ?? 10 ?? 20
// checks if null is there if null then another value else the first value
```

### Ternary Operator - ?

```js
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")
```

```js