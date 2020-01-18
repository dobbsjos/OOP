var Employee = require("./Employee");


class Engineer extends Employee {
    constructor(name, id, email, userName) {
        this.userName = userName;


        super(name, id, email);

    }
    getRole() {
        return "Engineer";
    }
}

module.export = Engineer;
