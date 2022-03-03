const Intern = require('./Itern')
const Employees = require('./Employees')

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }

    stateRole() {
        return "Intern"
    }
}

module.exports = Intern;