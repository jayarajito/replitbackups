function User(fullName){
  this.fullName = fullName
  this.friendList = []
  this.addFriend = (friendName) => this.friendList.push(friendName)
  this.printFriendList = () => console.log(this.friendList)
  this.findMutualsWith = (userObj) => this.friendList.filter(friend => userObj.friendList.includes(friend))
}

const dilip = new User('dilip')

//console.log(dilip)

dilip.addFriend('cr7')
dilip.addFriend('zlatan')
dilip.addFriend('zidane')
dilip.addFriend('luka')

//console.log(dilip)

const bhagwati = new User('bhagwati')

bhagwati.addFriend('cr7')
bhagwati.addFriend('ramos')
bhagwati.addFriend('zidane')
bhagwati.addFriend('messi')

//console.log(bhagwati)

console.log(dilip.findMutualsWith(bhagwati))
console.log(bhagwati.findMutualsWith(dilip))