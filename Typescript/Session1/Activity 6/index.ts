/* Create an object named student to store the following details:

firstName: First Name of the candidate (string)
lastName: Last Name of the candidate (string)
age: Age of the candidate (number)
isGraduated: Boolean value indicating whether the candidate has graduated (boolean)
courses: An array of strings representing the courses the candidate has taken
*/

//Write your code here

console.log(
  `Student ${student.firstName} ${student.lastName} is ${student.age} years old and has ${student.isGraduated ? "graduated" : "not graduated"}. Courses taken: ${student.courses.join(", ")}`,
);
