class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
   getRole() {
       return "Employee";
   } 

  }

module.export = Employee;

