 function methodOnObject(
   name:string, 
   age:number, 
   college:string, 
   city:string, 
   country:string
   ): string {
 /* You need to type annotate and implement this function. */
  const person = {
    name,
    age,
    college,
    city,
    country,
    getCity: function (): string {
      const userName:string = `${this.name} lives in ${this.city}`;
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