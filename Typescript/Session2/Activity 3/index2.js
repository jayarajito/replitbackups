function methodOnObject(name, age, college, city, country) {
  /* You need to type annotate and implement this function. */
  // return { name, age, college, city, country };
  const person = {
    name,
    age,
    college,
    city,
    country,
    getCity: function () {
      const userName = `${this.name} lives in ${this.city}`;
      return userName;
    },
  };
  return person.getCity();
}
const result = methodOnObject(
  "Jayaraj",
  33,
  "IIT Kharagpur",
  "Kharagpur",
  "India",
);
console.log(result);
