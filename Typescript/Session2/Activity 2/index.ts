/* 
1. Define a user object type which will have the following properties:
- firstName
- lastName
- balance
- showBalance() method
*/

//Write your code here

// interface User {
//   firstName: string;
//   lastName: string;
//   balance: number;
//   showBalance: () => void;
// }

class User {
  firstName: string;
  lastName: string;
  balance: number;

  constructor(firstName: string, lastName: string, balance: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }

  showBalance(): void {
    console.log(this.balance);
  }
}

class BankAccount extends User {
  accountNumber: number;
  interestRate: number;

  constructor(
    firstName: string,
    lastName: string,
    balance: number,
    accountNumber: number,
    interestRate: number,
  ) {
    super(firstName, lastName, balance);
    this.accountNumber = accountNumber;
    this.interestRate = interestRate;
  }

  calculateInterest(): number {
    return this.balance * this.interestRate;
  }
}

let user1 = new BankAccount("John", "Doe", 100, 123456789, 0.05);

user1.showBalance();
console.log(user1.calculateInterest());
// Output: 5 (100 * 0.05)

/*
2. Define a bankAccount object type which will have the following properties:
- accountNumber
- interestRate
- calculateInterese() method
*/

//Write your code here

// interface bankAccount extends User {
//   accountNumber: number;
//   interestRate: number;
//   calculateInterest: () => number;
// }

/*
3. Define a userAccount object type which will have properties of both:
- user
- bankAccount
*/

//Write your code here

// const userAccount: bankAccount = {
//   firstName: "Jayaraj",
//   lastName: "Narayanan",
//   balance: 500,
//   showBalance: () => console.log(this.balance),
//   accountNumber: 123456789,
//   interestRate: 6,
//   calculateInterest: () => this.balance * this.interestRate,
// };

// console.log(userAccount);
