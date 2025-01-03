function User(fullname){
  this.fullName = fullname;
  this.friendList = [];
  this.addFriend = (friendName) => this.friendList.push(friendName);
  this.printFriendList = () => console.log(this.friendList);
  this.findMutualsWith = (userObj) => this.friendList.filter(friend => userObj.friendList.includes(friend))
}

const abhash = new User('abhash tiwari')
  abhash.addFriend('cr7');
  abhash.addFriend('jude');
  abhash.addFriend('luka');
  abhash.addFriend('kroos');

const akarshit = new User('akarshit choudhary');
akarshit.addFriend('jude');
akarshit.addFriend('militao');
akarshit.addFriend('luka');
akarshit.addFriend('courtois');
akarshit.addFriend('lucas');

console.log(abhash)
console.log(akarshit)

console.log(abhash.findMutualsWith(akarshit))
console.log(akarshit.findMutualsWith(abhash))