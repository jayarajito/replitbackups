// Create a User Object

/*
A user account should have the following:
Properties: 
  firstName
  lastName
  Balance
and method:
  showBalance() method - It should log the current balance and doens't returns anything.

*/
// type User = {
//   firstName: string;
//   lastName: string;
//   balance: number;
//   showBalance: () => void;
// };

interface User {
  firstName: string;
  lastName: string;
  balance: number;
  showBalance: () => void;
};


let userOne: User = {
  firstName: "Jayaraj",
  lastName: "Narayanan",
  balance: 0,
  showBalance: () => console.log(this.balance),
};

let userTwo: User = {
  firstName: "Jayaraj",
  lastName: "Narayanan",
  balance: 0,
  showBalance: () => console.log(this.balance),
};

let userThree: User = {
  firstName: "Jayaraj",
  lastName: "Narayanan",
  balance: 0,
  showBalance: () => console.log(this.balance),
};

let userFour: User = {
  firstName: "Jayaraj",
  lastName: "Narayanan",
  balance: 0,
  showBalance: () => console.log(this.balance),
};

console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(userFour);
