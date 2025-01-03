function methodOnObject(name, age, college, city, country) {
    /* You need to type annotate and implement this function. */
    var person = {
        name: name,
        age: age,
        college: college,
        city: city,
        country: country,
        getCity: function () {
            var userName = "".concat(this.name, " lives in ").concat(this.city);
            return userName;
        },
    };
    return person.getCity();
}
var result = methodOnObject("Jayaraj", 33, "IIT Kharagpur", "Kharagpur", "India");
console.log(result);
