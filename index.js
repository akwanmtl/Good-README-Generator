// Imports the necessary package and js file and set them as variables to be used here
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const badgeInfo = require("./utils/badge");

// array of questions for the user
const questions = [
    {
        name: 'title',
        message: 'Please enter the title of your project:'
    },
    {
        name: 'description',
        message: 'Please enter a description of your project:'
    },
    {
        name: 'installation',
        message: 'Please enter the installation instructions for your project:',
        default: 'npm install'
    },
    {
        name: 'usage',
        message: 'Please enter the usage information of your project:'
    },
    {
        name: 'contributing',
        message: 'Please include the contributers of your project:'
    },
    {
        name: 'tests',
        message: 'Please enter the tests instructions for your project:',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'badge',
        message: 'Please choose the license from the following list:',
        choices: Object.keys(badgeInfo)
        // choices: ['Apache','Eclipse','GNU', 'MIT', 'Mozilla', 'Unlicense', 'WTFPL'],
    },
    {
        name: 'github',
        message: 'Please enter your Github username:'
    },
    {
        name: 'email',
        message: 'Please enter your e-mail address:'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    //creates a folder to place the readme file (in case the folder does not exists)
    let dir = './output/';
    fs.mkdir(dir,(error)=>{return});

    //writes the data to the filename
    fs.writeFile(dir+fileName,data,(error)=>{
        (error) ? console.error(error) : console.log("Your README file has been generated!");
    });
}

// function to initialize program
function init() {
    inquirer
        //first prompts the questions
        .prompt(questions)
        //then calls the generateMarkdown function to get README file content with the user's answers
        //and calls the writeToFile function to create the file 
        .then(response =>{
            let data = generateMarkdown(response);
            writeToFile('README.md', data)
        });
}

// function call to initialize program
init();

