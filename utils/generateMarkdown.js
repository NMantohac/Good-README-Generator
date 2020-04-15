const api = require("./api")

function generateMarkdown(answers, apiData) { 
  return `# ${answers.project}

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
![GitHub Profile Image:](${apiData.data.avatar_url})

GitHub: [${apiData.data.url}](${apiData.data.url})
Email: ${apiData.data.email}

`;
}

module.exports = generateMarkdown;
