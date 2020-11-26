const inquirer = require("inquirer");
const fs = require("fs");
let badgeInfo = require("./badge");

/* list of items from user
* project title
* project description
* project installation
* project usage
* project contributing
* project tests
* project license
* project badge
* project github
* project email
*/



inquirer
    .prompt([
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
        },
    ])
    .then(response => {
        createReadMe(response);
    });

const createReadMe = project => {

    let badgeItem = badgeInfo[project.badge];
    let readmeOutline = `[![License: ${project.badge}](${badgeItem.img})]${badgeItem.url})

# ${project.title}

## Description 

${project.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${project.installation}

## Usage 

${project.usage}

## License

${badgeItem.license}

## Contributing

${project.contributing}

## Tests

${project.tests}

## Questions

[Link to Github Profile](https://github.com/${project.github})
For any question, you can reach me at ${project.email}
    `;
    let dir = './output/';
    fs.mkdir(dir,(error)=>{return});

    fs.writeFile(dir+'README.md',readmeOutline,(error)=>{
        (error) ? console.error(error) : console.log("Your README file has been generated!");
    });
}
