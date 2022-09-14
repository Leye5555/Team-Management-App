const {
  nameRegex,
  schoolRegex,
  emailRegex,
  numberRegex,
} = require('../utils/regex.js');

const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter your first and last names',
    validate: (input) => {
      return nameRegex.test(input) && input.trim().length !== 0;
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address',
    validate: (input) => {
      return emailRegex.test(input);
    },
  },
  {
    type: 'input',
    name: 'id',
    message: 'Please enter your employee ID',
    validate: (input) => {
      return numberRegex.test(input);
    },
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Please enter your office number',
    validate: (input) => {
      return numberRegex.test(input);
    },
  },
];

const cmdMenuQuestions = {
  type: 'list',
  name: 'manager_action',
  message: 'What will you like to do?',
  choices: ['Add an engineer', 'Add an intern', 'End team creation process'],
};
const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "Please enter the engineer's first and last names",
    validate: (input) => {
      return nameRegex.test(input) && input.trim().length !== 0;
    },
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter the engineer's email address",
    validate: (input) => {
      return emailRegex.test(input);
    },
  },
  {
    type: 'input',
    name: 'id',
    message: "Please enter the engineer's employee ID",
    validate: (input) => {
      return numberRegex.test(input);
    },
  },
  {
    type: 'input',
    name: 'github',
    message: "Please enter the engineer's github username",
  },
];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "Please enter the intern's first and last names",
    validate: (input) => {
      return nameRegex.test(input) && input.trim().length !== 0;
    },
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter the intern's email address",
    validate: (input) => {
      return emailRegex.test(input);
    },
  },
  {
    type: 'input',
    name: 'id',
    message: "Please enter the intern's employee ID",
    validate: (input) => {
      return numberRegex.test(input);
    },
  },
  {
    type: 'input',
    name: 'school',
    message: "Please enter the intern's school name",
    validate: (input) => {
      return schoolRegex.test(input);
    },
  },
];

module.exports = {
  cmdMenuQuestions,
  managerQuestions,
  engineerQuestions,
  internQuestions,
};
