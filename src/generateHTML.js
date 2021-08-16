const generateManager = function (manager) {
    return `<div class="row"><div class="col-6">
    <div class="card mx-auto mb-3" style="width: 18rem">
    <h5 class="card-header bg-primary text text-white">${manager.name}<br /><br />Manager</h5>
    <ol class="Employee-info Employee-info-flush bg-light">
        <li class="Employee-info">ID: ${manager.id}</li>
        <li class="Employee-info">Email: <a href="mailto:${manager.email}">${manager.email}</a>/li>
        <li class="Employee-info">${manager.officeNumber}</li>
        </ol>
            </div>
        </div>`}
        

        const generateIntern = function (intern) {
            return `
            <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-primary text-white">${intern.name}<br /><br />Intern</h5>
            <ol class="Employee-info Employee-info-flush bg-light list-style: none">
                <li class="Employee-info">${intern.id}</li>
                <li class="Employee-info"<a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="Employee-info"> ${intern.school}</li>
            </ol>
            </div>
        </div> </div>
            `
        };
    
        const generateEngineer = function (engineer) {
            return `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-primary text-white">${engineer.name}<br /><br />Engineer</h5>
            <ol class="Employee-info Employee-info-flush bg-light">
                <li class="Employee-info">${engineer.id}</li>
                <li class="Employee-info">Email Address<a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="Employee-info"><a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ol>
            </div>
        </div>`}


        // returns to the generated page
        generateHTML = (data) => {

            // employee cards array 
            pageArray = []; 
        
            for (let i = 0; i < data.length; i++) {
                const employee = data[i];
                const role = employee.getRole(); 
        
        
                // calling manager function
                if (role === 'Manager') {
                    const managerCard = generateManager(employee);
        
                    pageArray.push(managerCard);
                }
        
                // calling engineer function
                if (role === 'Engineer') {
                    const engineerCard = generateEngineer(employee);
        
                    pageArray.push(engineerCard);
                }
        
                // calling intern function 
                if (role === 'Intern') {
                    const internCard = generateIntern(employee);
        
                    pageArray.push(internCard);
                }
                
            }
        
            // joining the separated strings together
            const employeeCards = pageArray.join('')
        
            // return to generated page
            const generateTeam = generateTeamPage(employeeCards); 
            return generateTeam;
        
        }
    // generates remainder of html page 
    const generateTeamPage = function (employeeCards) {   
      return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <title>Team Profile Generator</title>
      </head>
      <body>
          <nav class="navbar navbar-dark bg-dark  mb-5">
              <span class="navbar-brand mb-0 h1 w-100 text-center bg-danger">My Team:</span>
          </nav>
          <div class="container">
          ${employeeCards} 
          </div>
          </div> </div>
      </div>
      
  </body>
  </html>`}
  module.exports = generateHTML; 
