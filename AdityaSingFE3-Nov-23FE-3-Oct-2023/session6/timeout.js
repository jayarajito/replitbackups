const timer = {
  currentTime: 0,
  showTime: function () {
    console.log(this.currentTime);
  },
  addTen: function () {
    this.currentTime += 10;
    this.showTime();
  },
};

setTimeout(timer.addTen.bind(timer), 2000);


// function () {
//   this.currentTime += 10;
//   this.showTime();
// }