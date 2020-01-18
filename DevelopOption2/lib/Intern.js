var Employee = require("./Employee");


class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;


        super(name, id, email);

    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return "school";
    }
}

module.export = Intern;