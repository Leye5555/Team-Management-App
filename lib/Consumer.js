const Employee = require('./Employee.js');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');

// consumer class for instantiating all other classes
class Consumer {
  static addEmployee(employee) {
    return new Employee(employee);
  }
  static addManager(manager) {
    return new Manager(manager);
  }
  static addEngineer(engineer) {
    return new Engineer(engineer);
  }
  static addIntern(intern) {
    return new Intern(intern);
  }
}

module.exports = Consumer;
