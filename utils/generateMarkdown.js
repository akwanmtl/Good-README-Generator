let badgeInfo = require('./badge');

// function to generate markdown for README
function generateMarkdown(data) {
  let badgeItem = badgeInfo[data.badge];
    
  return `[![License: ${data.badge}](${badgeItem.img})]${badgeItem.url})

# ${data.title}

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

${badgeItem.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

[Link to Github Profile](https://github.com/${data.github})
For any question, you can reach me at ${data.email}
      `;
}

module.exports = generateMarkdown;
