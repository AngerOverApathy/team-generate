const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require('./utils/htmlReport')

const teamArr = []

//team manager questions//
const manager = () => {
    return inquirer.prompt (
 [
    {
        type: 'input',
        name: 'name',
        message: "What is your team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your team manager's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
    },
    {
        type: 'input',
        name: 'githubName',
        message: "What is the team manager's github username?",
    }
   ])
   
}

//engineer or intern questions  HOW TO DIRECT INETERN VS ENGINEER
const addEmployee = () => {
    return inquirer.prompt (
 [
     {
        type: 'list',
        name: 'role',
        message: "Please select the employee role",
        choice: ['Engineer, Intern']
     },
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the employee's office number?",
    },
    {
        type: 'input',
        name: 'githubName',
        message: "What is the employee's github username?",
        when: (input) => input.role === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
        when: (input) => input.role === 'Intern'
    },
    {
        type: 'confirm',
        name: 'addMember',
        message: 'Would you like to add more team members?',
        default: false
    }
   ])
}

function newMember() {
if (confirmAddMember) {
    return addEmployee(teamArr)
} else {
    return teamArr
}
}

const writeToFile = data => {
    fs.writeFile('./dist/imdex.html', data, err => {
        if (err) {
            rejects(err);
            return;
        } else {
          resolve ({
              ok: true,
              message: 'Created Profile'
          })
        }
    })
}

function init() {
    return  inquirer.prompt(addEmployee)
     .then(data => {
        return  addEmployee(data)
     })
     .then(generateHTML => {
         return writeToFile(generateHTML)
     })
 }
 
 init();
