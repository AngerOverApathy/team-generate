const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require('./utils/htmlReport')

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const BottomBar = require('inquirer/lib/ui/bottom-bar');

const {managerProfile, engineerProfile, internProfile} = generateHTML

const teamArr = []

function start() {

//team manager questions
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
    }
   ])
   .then(res => {
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        teamArr.push(manager);
        addEmployee();
   })

}

//engineer or intern questions  HOW TO DIRECT INETERN VS ENGINEER
const addEmployee = () => {
    return inquirer.prompt (
 [
     {
        type: 'list',
        name: 'role',
        message: "Please select the employee role",
        choices: ['Engineer','Intern']
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
        name: 'githubName',
        message: "What is the employee's github username?",
        when: (input) => input.role === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
        when: (input) => input.role === 'Intern'
    }
   ])
   .then(res => {
    if(res.role === 'Intern') {
        const intern = new Intern(res.name, res.id, res.email, res.school);
        teamArr.push(intern);
    } else if (res.role === 'Engineer') {
        const engineer = new Engineer(res.name, res.id, res.email, res.githubName)
        teamArr.push(engineer);
    }
    addTeamMember()
   })
}

function addTeamMember () {
    return inquirer.prompt([
     {
         type: 'confirm',
         name: 'addMember',
         message: 'Would you like to add more team members?',
         default: false
     }
    ])
    .then(res=> {
        if(res.addMember == true) {
            addEmployee()
        } else {
            writeToFile(teamArr);
        }
     })
 }
 manager();
}

const writeToFile = writeHTML => {
    let generatedHTML = htmlBuilder(writeHTML)
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', generatedHTML, err => {
        if(err) {
            reject(err);
            return;
        } resolve ({
            ok: true,
            message:'Created HTML'
        })
    })
    })
}

function htmlBuilder (userInput) {
    let topHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generate</title>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/style.css">

    </head>
    <body>
    <div class="jumbotron" id="banner" style="background-color: rgb(90, 211, 161)">
    <h1 class="display-4 font-weight-bold text-center" id="title">Team Profile</h1>
    </div>
    `

    let bottomHtml = `
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
     </body>
     </html>
     `

for (let i = 0; i < userInput.length; i++) {
    switch (userInput[i].constructor.name) {
        case 'Manager':
            topHtml += managerProfile(userInput[i]);
            break;
        case 'Engineer':
            topHtml += engineerProfile(userInput[i]);
            break;
        case 'Intern' :
            topHtml += internProfile(userInput[i]);
            break;
        default:
            break;
    }
} 
return topHtml + bottomHtml
}


start();
