// const user = {
//   username: "hitesh",
//   loginCount: 8,
//   signedIn: true,
// };

// this is used for current context

function User (username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = User('user1', 1, true);
console.log(userOne);
const userTwo = User('user2', 2, false);
console.log(userOne); // this will be updated as userTwo
console.log(userTwo);

const user = new User("user", 1, true);
console.log(user);
console.log(user.constructor);
console.log(user instanceof User)