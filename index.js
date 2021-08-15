const inquirer = require("inquirer");
const fs = require("fs");
const { Intern } = require("./lib/Intern");
const { Manager } = require("./lib/Manager");
const { Engineer } = require("./lib/Engineer");

const team = [];


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  

function buildMenu() {
  inquirer
    .prompt([
      {
        name: "What would you like to do?",
        type: "list",
        choices: ["Intern", "Manager", "Engineer", "Generate HTML"],
      },
    ])
    .then((values) => {
      const [choice] = Object.values(values);
      if (choice === "Generate HTML") {
        // builds the html
        
        function startHtml() {
          const html = `<!DOCTYPE html>
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
                  <div class="row">`;
          fs.writeFile("./index.html", html, function(err) {
              if (err) {
                  console.log(err);
              }
          });
          console.log("Generated Html");
      }
      startHtml()
      function addHtml(member) {
          return new Promise(function(resolve, reject) {
              const name = member.getName();
              const role = member.getRole();
              const id = member.getId();
              const email = member.getEmail();
              let data = "";
              if (role === "Engineer") {
                  const gitHub = member.getGithub();
                  data = `
                  <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-primary text-white">${name}<br /><br />Engineer</h5>
            <ol class="Employee-info Employee-info-flush bg-light">
                <li class="Employee-info">ID:${id}</li>
                <li class="Employee-info">Email Address:${email}</li>
                <li class="Employee-info">GitHub:${gitHub}</li>
            </ol>
            </div> `
                  } else if (role === "Intern") {
                  const school = member.getSchool();
                  data = `
                  <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-primary text-white">${name}<br /><br />Intern</h5>
            <ol class="Employee-info Employee-info-flush bg-light list-style: none">
                <li class="Employee-info">ID:${id}</li>
                <li class="Employee-info">Email Address: ${email}</li>
                <li class="Employee-info">${school}</li>
            </ol>
            </div> `
                  
              } else {
                  const officePhone = member.getOfficeNumber();
                  data = `
                  <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-primary text text-white">${name}<br /><br />Manager</h5>
            <ol class="Employee-info Employee-info-flush bg-light">
                <li class="Employee-info">${id}</li>
                <li class="Employee-info"> ${email}</li>
                <li class="Employee-info">Office Phone:${officePhone}</li>
                  `
                
              } 
              
              console.log("adding team member");
              fs.appendFile("./index.html", data, function (err) {
                  if (err) {
                      return reject(err);
                  };
                  
                  return resolve();
              });
          });
          
                  
          
              
          
          
      }
      
      function finishHtml() {
          const html = ` </div>
          </div>
          
      </body>
      </html>`;
      
          fs.appendFile("./index.html", html, function (err) {
              if (err) {
                  console.log(err);
              };
          });
          console.log("finished");
      }
      




        console.log(team)
      } else {
          console.log(choice);
        switch (choice) {
          case "Intern": {
            addIntern();
            break;
          }
          case "Manager": {
              addManager();
            break;
          }
          case "Engineer": {
              addEngineer();
            break;
          }
        }
      }
    });
}

function addIntern() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
        },
        {
            name: 'email',
            type: 'input',
        },
        {
            name: 'school',
            type: 'input',
        },
    ]).then(values => {
        const {school, name, email} = values;
        const id = uuidv4();
        const newIntern = new Intern(school, name, id, email);
        team.push(newIntern);
        buildMenu();
    });
}
function addManager(){
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
        },
        {
            name: 'email',
            type: 'input',
        },
        {
            name: 'officeNumber',
            type: 'input',
        },
    ]).then(values => {
        const {officeNumber, name, email} = values;
        const id = uuidv4();
        const newManager = new Manager(officeNumber, name, id, email);
        team.push(newManager);
        buildMenu();
    })
}
function addEngineer(){
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
        },
        {
            name: 'email',
            type: 'input',
        },
        {
            name:'github',
            type:'input'
        },
    ]).then(values =>{
        const {github, name, email} = values;
        const id = uuidv4();
        const newEngineer = new Engineer(github, name, id, email);
        team.push(newEngineer);
        buildMenu();
    })
}


buildMenu();

