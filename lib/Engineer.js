import Employee from './Employee.js';

export default class Engineer extends Employee {
  constructor({ name, id, email, github }) {
    super({ name, id, email });
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this;
  }
}
