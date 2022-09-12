const nameRegex = /^[a-zA-Z ]{2,30}$/;
const schoolRegex = /^[a-zA-Z ]{2,100}$/;
const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$/;
const numberRegex = /\d/;
export const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter your first and last names',
    validate: (input) => {
      return nameRegex.test(input);
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

export const cmdMenuQuestions = {
  type: 'list',
  name: 'manager_action',
  message: 'What will you like to do?',
  choices: ['Add an engineer', 'Add an intern', 'End team creation process'],
};
export const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "Please enter the engineer's first and last names",
    validate: (input) => {
      return nameRegex.test(input);
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

export const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "Please enter the intern's first and last names",
    validate: (input) => {
      return nameRegex.test(input);
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
