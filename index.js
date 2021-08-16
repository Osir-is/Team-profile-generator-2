const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require('./src/generateHTML');
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
        const writeFile = data => {
          fs.writeFile('./dist/index.html', data, err => {
              // if there is an error 
              if (err) {
                  console.log(err);
                  return;
              // when the profile has been created 
              } else {
                  console.log("Your team profile has been successfully created! Please check out the index.html")
              }
          })
      }; 
      
      addManager()
        .then(addEmployee)
        .then(teamArray => {
          return generateHTML(teamArray);
        })
        .then(pageHTML => {
          return writeFile(pageHTML);
        })
        .catch(err => {
       console.log(err);
        });



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
}}


buildMenu();

