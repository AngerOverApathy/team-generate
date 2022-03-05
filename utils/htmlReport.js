const htmlReport = 
{
managerProfile: function (manager) {

    console.log('html manager')
    return `

    
    <div class="col-4 mt-4 card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
    </div>
    `;
},

engineerProfile: function (engineer) {
    console.log('engineer html')
    return `
    <div class="col-4 mt-4 card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="office">Office Number: ${engineer.officeNumber}</p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
    </div>
    `
},

internProfile: function (intern) {
    console.log('intern html')
    return `
    <div class="col-4 mt-4 card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="office">Office Number: ${intern.officeNumber}</p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
    `
}

}

module.exports = htmlReport;
