class Employee {
    constructor (name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }

    nameInput () {
        return this.name
    }

    idInput () {
        return this.id
    }   

    schoolInput () {
        return this.school
    }

    gitInput () {
        return this.github
    }

    emailInput () {
        return this.email
    }

    stateRole () {
        return 'Employee'
    }
}

module.exports = Employee;