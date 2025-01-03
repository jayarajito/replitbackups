//primitives are number, string, booleans

// let a = 10
// let b = a
// a = 5
// console.log(a, b)

const amey = {
 name: "Amey Bhandari",
 address: {
   city: "Pune",
   country: "India"
 },
 interests: ["Product Development", "Cinematography"]
};
//a reference for the same memory location was passed to rutik
// const rutik = amey

// rutik.name = 'rutik kulkarni'

// console.log(rutik)
// console.log(amey)

const rutik = {...amey} //shallow copy till level 1

rutik.name = 'rutik kulkarni'
// console.log(rutik)
// console.log(amey)

// rutik.address.city = 'Bangalore'
// console.log(rutik)
// console.log(amey)

rutik.address = {
  city: "Bangalore",
  country: "India"
}

rutik.address.city = 'London'

// rutik.interests[0] = 'football'
rutik.interests = ['football', 'cricket']
// console.log(rutik)
// console.log(amey)

const sanjay = {...amey, address: {...amey.address}, interests: [...amey.interests]} //sahllow copy till level 2
sanjay.name = 'sanjay bohara'
sanjay.address.city = 'mumbai'
console.log(sanjay)
console.log(amey)

const mugesh = JSON.parse(JSON.stringify(amey)) //deep copy