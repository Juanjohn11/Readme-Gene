// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs')
const generateMarkdown = require('./utils/gene-markdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title for your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a discription of your project?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("readme")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (answers){
        const newString = generateMarkdown(answers)
        writeToFile('./readme.md', newString)
        console.log(newString)
    })

}

// Function call to initialize app
init();
