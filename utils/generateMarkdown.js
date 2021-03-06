// Function to Generate Markdown File based on Inquirer prompt answers and GitHub API data

function generateMarkdown(answers, apiData) { 
  return ` ![npm](https://img.shields.io/badge/npm-v6.13.4-blue) ![node index.js](https://img.shields.io/badge/node-index.js-red)

# ${answers.project}

## Description

${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Tests

${answers.tests}

## Contributing

${answers.contributing}

## License

${answers.license}

## Questions?

GitHub: [${apiData.data.html_url}](https://github.com/NMantohac)

![GitHub Profile Image:](${apiData.data.avatar_url})

Email: ${apiData.data.email}

`;
}

module.exports = generateMarkdown;
