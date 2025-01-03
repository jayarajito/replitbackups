//Defining an object
const student = {
  fullName: "Rohit",
  greet: function () {
    //We want to print "Hello, Rohit"
    console.log("Hello, " + this.fullName);
  },
};

// student.greet() - normal example

// //We define an executor function
function executeObjectFunction(callback) {
  callback();
  // let callback = function () {
  //     //We want to print "Hello, Rohit"
  //     console.log("Hello, " + this.fullName);
  //   }
  // callback()
}

// //Passing the object method as callback
executeObjectFunction(student.greet.bind(student));
