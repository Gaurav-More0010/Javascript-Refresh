//_____________Objects____________________

//Object Literals

const mySum = Symbol("key1");
const JsUser = {
  name: "Gaurav",
  "full Name": "Gaurav More",
  age: 16,
  location: "Pune",
  email: "gaurav@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["MOnday", "Saturday"],
};

//console.log(JsUser["email"]);
JsUser.greeting = function () {
  console.log("Hello JS User");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
