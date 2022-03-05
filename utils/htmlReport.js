const htmlReport = 
{
managerProfile: function (manager) {
    return `
<div class="container">
    <div class="row">
        <div class="col-sm-4">
                <div class="card text-dark bg-info mb-3" style="max-width: 20rem">
                    <div class="card-header">Manager</div>

                        <div class="card-body">
                        <h4 class="card-title">${manager.name}</h4>
                        <p class="card-text">
                        <p class="id">ID: ${manager.id}</p>
                        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="office">Office Number: ${manager.officeNumber}</p>
                        </p>
                        </div>
                     </div>
                           
                </div>
        </div>
    </div>
    `;
},

engineerProfile: function (engineer) {
    return `
<div class="container">
    <div class="row">
        <div class="col-sm-4">
                <div class="card text-dark bg-info mb-3" style="max-width: 20rem">
                    <div class="card-header">Engineer</div>

                        <div class="card-body">
                        <h4 class="card-title">${engineer.name}</h4>
                        <p class="card-text">
                        <p class="id">ID: ${engineer.id}</p>
                        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                        </p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    `;
},

internProfile: function (intern) {
    return `
<div class="container>
    <div class="row">
        <div class="col-sm-4">
                <div class="card text-dark bg-info mb-3" style="max-width: 20rem">
                    <div class="card-header">Engineer</div>

                        <div class="card-body">
                        <h4 class="card-title">${engineer.name}</h4>
                        <p class="card-text">
                        <p class="id">ID: ${intern.id}</p>
                        <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p class="school">School: ${intern.school}</p>
                        </p>
                        </div>
                     </div>             
             </div>
        </div>
    </div>
    `;
}
}

module.exports = htmlReport;
