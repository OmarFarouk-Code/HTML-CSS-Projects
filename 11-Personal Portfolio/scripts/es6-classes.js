class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  login() {
    console.log("Welcome");
  }

  logout() {
    console.log("Bye");
  }
}

const employee1 = new Person("Omar", 19);
const employee2 = new Person("belal", 19);
console.log(employee1.login == employee2.login);
employee1.login();
