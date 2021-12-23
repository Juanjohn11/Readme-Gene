// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs')
const generateMarkdown = require('./utils/gene-markdown');
const Choices = require('inquirer/lib/objects/choices');
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
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installtion Process?'
    },
    {
        type: 'input',
        name: 'usage',
        message:'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type:'list',
        name: 'license',
        message: 'choose the correct license for this project?',
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'who are the contributers of this project?'
    },
    {
        type:'input',
        name:'username',
        message:'what is your github username?'
    },
    {
        type:'input',
        name:'email',
        messsage:'what is your email?'
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
