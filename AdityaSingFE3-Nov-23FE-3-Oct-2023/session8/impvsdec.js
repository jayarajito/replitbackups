const passwords = [
  "123456",
  "password",
  "admin",
  "helloworld",
  "mypassword123",
];

//imperative is like dictation/telling too many details
let good_passwords = [];
for(let i=0; i<passwords.length; i++){
  let currPassword = passwords[i];
  if(currPassword.length>=9)
    good_passwords.push(currPassword)
}
console.log(good_passwords)

//declarative (what do you want)
console.log(passwords.filter(pass => pass.length>=9))