const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template');
const writeFile = require('./utils/generate-readme');


const promptReadMe = () => {
    return inquirer.prompt([
       {
           type: 'input',
           name: 'title',
           message: 'What is the title of the project? (Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter a project title');
                    return false;
                }
            }
       },
       {
        type: 'input',
        name: 'description',
        message: 'Describe your project: (Required)',
         validate: titleInput => {
             if(titleInput) {
                 return true;
             } else {
                 console.log('Please enter a Description');
                 return false;
             }
         }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter Tests information:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license do you want to include',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
      }
      
    ])
    
    
}
promptReadMe()
    .then(readMeData => {
        return generateReadMe(readMeData);
    })
    .then(readmePage => {
        return writeFile(readmePage);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
