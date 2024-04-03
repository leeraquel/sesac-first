//commonjs
//module.exports 한번에 처리

const colors = ["red", "green", "pink", "yellow", "purple", "orange"];
const sayHi = () => {
  console.log("Hello! this function is sayHi function!");
};
const sayName = function (name) {
  console.log(
    "Hello! my name is " + name + " ! this function is sayName function!"
  );
  sayHi();
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getBornYear() {
    return new Date().getFullYear() - this.age;
  }
}

module.exports = { colors, sayName, Person };
