const Engineer = require('./Engineer')
const Employee = require('./Employees')

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github; 
    }

    stateRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 