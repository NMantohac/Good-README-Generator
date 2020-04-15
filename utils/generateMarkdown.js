function generateMarkdown(answers) { 
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

## Questions


`;
}

// # ${data.title}
module.exports = generateMarkdown;
