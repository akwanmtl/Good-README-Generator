// Imports badge.js file to get the object with the information about the licenses
const badgeInfo = require('./badge');

// function to generate markdown for README
function generateMarkdown(data) {
  let badgeItem = badgeInfo[data.license];

  //return the string
  return `# ${data.title}

  [![License: ${badgeItem.badge}](${badgeItem.img})](${badgeItem.url})

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage 

${data.usage}

## License

${data.title} is under the terms of the [${data.license} License](${badgeItem.url}). 

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

[Link to Github Profile](https://github.com/${data.github})<br/>
For any question, you can reach me at ${data.email}
      `;
}
//exports the generateMarkdown function to be used in the index.js
module.exports = generateMarkdown;
