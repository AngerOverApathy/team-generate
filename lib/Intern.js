const Intern = require('./Intern')
const Employees = require('./Employees')

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }

    schoolInput () {
        return this.school
    }

    stateRole() {
        return "Intern"
    }
}

module.exports = Intern;