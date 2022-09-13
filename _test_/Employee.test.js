const Employee = require('../lib/Employee.js');

// create mock Employee data
const employee = new Employee({
  name: 'Agrant Test',
  email: 'agrant@gmail.com',
  id: 298,
});

test('test to see if the role is correct', () => {
  expect(employee.getRole()).toEqual('Employee');
});
