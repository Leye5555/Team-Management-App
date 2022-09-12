import inquirer from 'inquirer';
import url from 'url';
import path from 'path';
import chalk from 'chalk';

import { Manager, Engineer, Intern } from './lib/index.js';

import {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  cmdMenuQuestions,
} from './lib/questions.js';

let manager, engineer, intern;
const allTeamMembers = [];

const managerMenu = () =>
  inquirer
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
function managerChoices({ manager_action }) {
  switch (manager_action) {
    case 'Add an engineer':
      inquirer
        .prompt(engineerQuestions)
        .then((ans) => {
          engineer = new Engineer(ans);
          allTeamMembers.push(engineer);
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
      break;
    case 'Add an intern':
      inquirer
        .prompt(internQuestions)
        .then((ans) => {
          intern = new Intern(ans);
          allTeamMembers.push(intern);
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
      break;
    case 'End team creation process':
      // TODO: render to html;
      //
      console.log(allTeamMembers);
      console.log('Team members page was rendered successfully!');
      console.log('');
      console.log(`click the link to view it : `, chalk.greenBright('test'));
      return;
    default:
      return;
  }
}

inquirer
  .prompt(managerQuestions)
  .then((answers) => {
    manager = new Manager(answers);
    allTeamMembers.push(manager);
    managerMenu();
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(
        chalk.red("Prompt couldn't be rendered in the current environment")
      );
    } else {
      console.log(chalk.red('Something else went wrong!'));
    }
  });
