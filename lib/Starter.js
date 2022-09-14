const inquirer = require('inquirer');
const url = require('url');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const Consumer = require('../lib/Consumer.js');
const Document = require('../lib/Document.js');
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  cmdMenuQuestions,
} = require('./questions.js');
const pathToUrl = require('../utils/pathToUrl.js');
const renderEmployeeCards = require('../utils/renderCards.js');

let manager, engineer, intern;
const allTeamMembers = [];

// starter class
module.exports = class Starter {
  static start() {
    console.log(' ');
    console.log(chalk.blue.bold.bgWhite('Welcome Manager!'));
    console.log(' ');
    setTimeout(() => {
      return inquirer
        .prompt(managerQuestions)
        .then((ans) => {
          manager = Consumer.addManager(ans);
          // render data to html string then add to members array
          allTeamMembers.push(renderEmployeeCards(manager));
          console.log('');
          managerMenu();
        })
        .catch((error) => {
          if (error.isTtyError) {
            console.log(
              chalk.red(
                "Prompt couldn't be rendered in the current environment"
              )
            );
          } else {
            console.log(chalk.red('Something else went wrong!'));
          }
        });
    }, 1500);
  }
};

function managerMenu() {
  return inquirer
    .prompt(cmdMenuQuestions)
    .then((ans) => {
      managerChoices(ans);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(
          chalk.red("Prompt couldn't be rendered in the current environment")
        );
      } else {
        console.log(chalk.redBright('Something else went wrong!'));
      }
    });
}
function managerChoices({ manager_action }) {
  switch (manager_action) {
    case 'Add an engineer':
      return inquirer
        .prompt(engineerQuestions)
        .then((ans) => {
          engineer = Consumer.addEngineer(ans);
          // render data to html string then add to members array
          allTeamMembers.push(renderEmployeeCards(engineer));
          console.log(' ');
          console.log('Employee details added successfully');
          console.log(' ');
          managerMenu();
        })
        .catch((error) => {
          if (error.isTtyError) {
            console.log(
              chalk.red(
                "Prompt couldn't be rendered in the current environment"
              )
            );
          } else {
            console.log(chalk.red('Something else went wrong!'));
          }
          managerMenu();
        });
    case 'Add an intern':
      return inquirer
        .prompt(internQuestions)
        .then((ans) => {
          intern = Consumer.addIntern(ans);
          // render data to html string then add to members array
          allTeamMembers.push(renderEmployeeCards(intern));
          console.log(' ');
          console.log('Employee details added successfully');
          console.log(' ');
          managerMenu();
        })
        .catch((error) => {
          if (error.isTtyError) {
            console.log(
              chalk.red(
                "Prompt couldn't be rendered in the current environment"
              )
            );
          } else {
            console.log(chalk.red('Something else went wrong!'));
          }
          managerMenu();
        });
    case 'End team creation process':
      try {
        //  render to html;
        const renderPath = 'dist/index.html';
        fs.writeFile(
          renderPath,
          Document.render(allTeamMembers.join(' ')),
          (err) => {
            console.log(' ');
          }
        );
        console.log(' ');
        console.log(
          chalk.greenBright('Team members page was rendered successfully!')
        );
        console.log('');
        console.log(
          `Copy and paste link in browser to open : `,
          chalk.greenBright(pathToUrl(renderPath))
        );
      } catch (err) {
        console.log(err);
      }

      return;
    default:
      return;
  }
}
