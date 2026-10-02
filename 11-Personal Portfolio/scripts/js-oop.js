// LEARNING JS OOP

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.login = function () {
  console.log("You have successfully logged In!");
};

const employee1 = new Person("Omar", 19);
console.log(employee1);
employee1.login();
