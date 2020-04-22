// Require Dependencies and usage of api.js and generateMarkdown.js
const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

// Series of prompts using Inquirer
inquirer.prompt([
    { 
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "project",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    }

]).then(answers => {
    console.log(answers);

    // Retrieves GitHub username answer to pass it as a callback to api.js and invokes writeToFile function with written parameters
    api.getUser(answers.username, function(apiData) {
        writeToFile("README.md", answers, apiData);
    });

}).catch(err => {
    throw err;
})

// fs.writeFile usage and console.logs a successful README.md file creation
function writeToFile(fileName, answers, apiData) {

    fs.writeFile(fileName, generateMarkdown(answers, apiData), err => {
        if (err) {
            throw err
        }
        console.log("README.md succesfully created!");
    })
}