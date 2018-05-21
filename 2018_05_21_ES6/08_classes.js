
// Prototype example

const Car = function() {
  this.wheels = 4
  this.axles = 2
}

const my_car = new Car()

console.log(my_car.wheels)







// Change the prototype

const Car = function() {
  this.wheels = 4
  this.axles = 2
}

Car.prototype = {
  drive: function() {
    console.log("go!")
  },
  brake: function() {
    console.log("stop!")
  }
}

const my_car = new Car()

my_car.drive()
my_car.brake()








// React Native class example:
// TodoList.js




