import Employee from './Employee.js';

export default class Manager extends Employee {
  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email });
    this.officeNumber = officeNumber;
  }
  getRole() {
    return this;
  }
}
