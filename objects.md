## Objects

```js
// to use symbol as key in object
const sym = Symbol("key");

const JSUser = {
  name: "Hitesh",
  [sym]: "value", // symbol as key
  age: 25,
  location: "India",
  email: "example@gmail.com",
  isLoggedIn: false,
  LastLoggedIn: new Date(),
};

console.log(JSUser.name); // Hitesh
console.log(JSUser["name"]); // Hitesh
console.log(JSUser[sym]); // value

// Object.freeze(JSUser) // to make object immutable

JSUser.greeting = function () {
  console.log("Hello JS User");
};

JSUser.greeting(); // Hello JS User
console.log(JSUser);
```

```js
const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = 123;
tinderUser.name = "Hitesh";
tinderUser.age = 25;

const regularUser = {
  id: 123,
  fullName: {
    first_name: "Hitesh",
    last_name: "Choudhary",
  },
  age: 25,
};
console.log(regularUser.fullName.first_name); // Hitesh
```

merging objects

```js
const user = {
  name: "Hitesh",
  age: 25,
};
const permissions = {
  role: "admin",
};

const newUser = Object.assign({}, user, permissions);
// here {} is target object, user and permission is source object

// ... spread operator
const newUser = { ...user, ...permissions };

Object.keys(tinderUser); // ["id", "name", "age"]
Object.values(tinderUser); // [123, "Hitesh", 25]
Object.entries(tinderUser); // [["id", 123], ["name", "Hitesh"], ["age", 25]]
tinderUser.hasOwnProperty("name"); // true
```

### Object Destructuring

```js
const course = {
  courseName: "JS",
  price: 1000,
  courseInstructor: "Hitesh",
};

// alias can be created
const { courseInstructor: instructor } = course;
// used widely in react
console.log(courseInstructor); // Hitesh
console.log(instructor); // Hitesh
```

### JSON API

```json
{
  "name": "hitesh",
  "coursename": "js",
  "price": 1000
}
```
