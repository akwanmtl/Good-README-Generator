const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: 'title',
        message: 'Please enter the title of your project:'
    },
    {
        // type: 'editor',
        name: 'description',
        message: 'Please enter a description of your project:'
    },
    {
        // type: 'editor',
        name: 'installation',
        message: 'Please enter the installation instructions for your project:'
    },
    {
        // type: 'editor',
        name: 'usage',
        message: 'Please enter the usage information of your project:'
    },
    {
        // type: 'editor',
        name: 'contributing',
        message: 'Please include the contributers of your project:'
    },
    {
        // type: 'editor',
        name: 'tests',
        message: 'Please enter the tests instructions for your project:'
    },
    {
        type: 'list',
        name: 'badge',
        message: 'Please choose the license from the following list:',
        choices: ['Apache 2.0','EPL-1.0', 'MIT', 'MPL 2.0', 'Unlicense', 'WTFPL'],
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
    let dir = './output/';
    fs.mkdir(dir,(error)=>{return});

    fs.writeFile(dir+fileName,data,(error)=>{
        (error) ? console.error(error) : console.log("Your README file has been generated!");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(response =>{
            let data = generateMarkdown(response);
            writeToFile('README.md', data)
        });
}

// function call to initialize program
init();
