const Employee = require('./Employees')

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber
    }

    gitInput () {
        return this.github;
    }

    stateRole() {
        return "Manager"
    }
}

module.exports = Manager;