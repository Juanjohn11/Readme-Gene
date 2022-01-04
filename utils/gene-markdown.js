// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)  

## Table Of Contents
- [Description](#Discription)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License) 
- [Contributing](#Contributing)
- [Questions](#Question)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Contributing
${data.contributing}

## Question

Github account: [${data.username}](https://github.com/${data.username})

Email me: ${data.email}
`;
}

module.exports = generateMarkdown;