//Singleton object

const tinderUser = {};
tinderUser.id = "1a";
tinderUser.name = "Gaurav";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
  email: "ss@gmail.com",
  fullName: {
    userfullname: {
      firstname: "Gaurav",
      lastname: "More",
    },
  },
};
//console.log(regularUser.fullName.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const course = {
  coursename: "JS Refresh",
  price: "999",
  courseTeacher: "Rohit",
};
const { courseTeacher } = course;
console.log(courseTeacher);
