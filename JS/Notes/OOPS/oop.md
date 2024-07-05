## OOP - Object Oriented Programming

JS is a prototype based language, not functional or class
Syntactical sugar

## Objects

collection of properties and methods

### keywords

Object literal = {} (literally object)

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

### 4 Pillars of OOP

- Abstraction - hide complexity
- Encapsulation - group related properties and methods
- Inheritance - eliminate redundant code
- Polymorphism - many forms

```js
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function() {
    console.log(`Hello ${this.username}`);
  }

  return this;
}

const userOne = User("user1", 1, true);
console.log(userOne);
const userTwo = User("user2", 2, false);
console.log(userOne); // this will be updated as userTwo
console.log(userTwo);


const user = new User("user", 1, true);
console.log(user);
console.log(user.constructor);
console.log(user instanceof User);
```

use **new** keyword to
