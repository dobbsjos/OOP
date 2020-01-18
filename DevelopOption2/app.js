// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const inquirer = require("inquirer")
const fs = require("fs");
const engineerCard = require("./htmlRender/engineerCard");
const internCard = require("./htmlRender/internCard");
const managerCard = require("./htmlRender/managerCard");
const mainRender = require("./htmlRender/mainRender");


const outputPath = path.resolve(__dirname, "output", "team.html");

const teamMember = [];

function mainApp() {
    // create a manager
    inquirer    
        .prompt([{
            message: "Do you want to start a team?:",
            name: "team"
        }
        
        ])
        .then(answers =>{
            const teamObj = new Employee();
           console.log(teamObj);
        })

}
// this function create a list to add teammembers
function createTeam(){

    inquirer
        .prompt([{
            message: "What is your Name:",
            name: "name"
        },
        {
            message: "What is your Role:",
            name: "role"
        },
        {
            message: "What is your employee id:",
            name: "id"
        },
        {
            message: "What is your email:",
            name: "email"
        }
            
        ])
        .then(answers => {
            // create a switch statement to choose between engineer, intern, or build team
           const managerObj = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
           console.log(managerObj);
           
        });
}

// a function that create an engineer
function getEngineer() {

    inquirer    
        .prompt([{
            message: "What is your Name:",
            name: "name"
        },
        {
            message: "What is your Role:",
            name: "role"
        },
        {
            message: "What is your employee id:",
            name: "id"
        },
        {
            message: "What is your github username:",
            name: "username"
        }

        ])
        .then(answers =>{
            const engineerObj = new Engineer(answers.name, answers.id, answers.username);
            console.log(engineerObj);
        })

}
// a function that create an intern
function getIntern() {

    inquirer    
        .prompt([{
            message: "What is your Name:",
            name: "name"
        },
        {
            message: "What is your Role:",
            name: "role"
        },
        {
            message: "What is your employee id:",
            name: "id"
        },
        {
            message: "What school did you attend:",
            name: "school"
        }
          

        ])
        .then(answers =>{
            const internObj = new Intern(answers.name, answers.id, answers.school);
            console.log(internObj);
        })

}

function buildTeam() {
fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()


