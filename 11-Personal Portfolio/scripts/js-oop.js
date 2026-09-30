// LEARNING JS OOP

function Person(name, age) {
  this.name = name;
  this.age = age;

  function login() {
    console.log("You have successfully logged In!");
    return true;
  }
}

const employee1 = new Person("Omar", 19);
console.log(employee1);
