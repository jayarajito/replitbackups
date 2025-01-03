const passwords = [
  "123456",
  "password",
  "admin",
  "helloworld",
  "mypassword123",
];

//long password >= 9

//imperative -> //how you want
//verbose
let longPasswords = []
for(let i=0; i<passwords.length; i++){
  if(passwords[i].length>=9)
    longPasswords.push(passwords[i])
}
console.log(longPasswords)

//declarative //what you want
console.log(passwords.filter(password => password.length>=9))


//oop problems
//1. there can be very complex relationships
//2. 