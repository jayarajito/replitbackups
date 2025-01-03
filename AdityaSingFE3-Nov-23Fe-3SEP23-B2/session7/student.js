//Parent Class
class Student {
  //Parent class constructor with parameter
  constructor(name) {
    this.fullName = name;
  }

  //Parent class member method
  markAttendance() {
    console.log(this.fullName, "is present");
  }
}

//Derived or Child class
class SportsCaptain extends Student {
  //constructor overriding
  constructor(name, sport){
    super(name)  //mandatory
    this.sport = sport
  }
  //method overriding
  markAttendance() {
    // super.markAttendance()
    console.log("Sports captain", this.fullName, "is present");
  }
  //Child class member method
  playSport() {
    //fullName is derived from Parent class's fullName data member
    console.log(this.fullName, "is playing", this.sport);
  }
}


const rammehar = new Student("rammehar")
rammehar.markAttendance()
//rammehar.playFootball()

const naveen = new SportsCaptain('naveen', 'cricket')
naveen.markAttendance()
naveen.playSport()