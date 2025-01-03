//Defining an object
const student = {
  fullName: "Rohit",
  greet: function () {
    //We want to print "Hello, Rohit"
    console.log("Hello, " + this.fullName);
  },
};

const teacher = {
  fullName: "krish"
}

//student.greet()

//We define an executor function
function executeObjectFunction(callback) {
  callback();
  // (function () {
  //   //We want to print "Hello, Rohit"
  //   console.log("Hello, " + this.fullName);
  // })()
}

//Passing the object method as callback
executeObjectFunction(student.greet.bind(teacher));
