/*
1. Define a user object type which will have the following properties:
- firstName
- lastName
- balance
- showBalance() method
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Write your code here
// interface User {
//   firstName: string;
//   lastName: string;
//   balance: number;
//   showBalance: () => void;
// }
var User = /** @class */ (function () {
    function User(firstName, lastName, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }
    User.prototype.showBalance = function () {
        console.log(this.balance);
    };
    return User;
}());
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount(firstName, lastName, balance, accountNumber, interestRate) {
        var _this = _super.call(this, firstName, lastName, balance) || this;
        _this.accountNumber = accountNumber;
        _this.interestRate = interestRate;
        return _this;
    }
    BankAccount.prototype.calculateInterest = function () {
        return this.balance * this.interestRate;
    };
    return BankAccount;
}(User));
var user1 = new BankAccount("John", "Doe", 100, 123456789, 0.05);
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
