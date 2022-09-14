const Consumer = require('../lib/Consumer.js');
const Employee = require('../lib/Employee.js');
const { nameRegex, emailRegex, numberRegex } = require('../utils/regex.js');
// import mock class
jest.mock('../lib/Employee.js');

const mockData = {
  name: 'Agrant Test',
  email: 'agrant@gmail.com',
  id: '298',
};

beforeAll(() => {
  // clear open mock instances
  Employee.mockClear();

  jest
    .spyOn(Employee.prototype, 'getName')
    .mockImplementation(() => mockData.name);
  jest
    .spyOn(Employee.prototype, 'getEmail')
    .mockImplementation(() => mockData.email);
  jest.spyOn(Employee.prototype, 'getId').mockImplementation(() => mockData.id);
});

afterAll(() => {
  jest.restoreAllMocks();
});

it('The Consumer class will create an Employee instance', () => {
  const employeeInstance = Consumer.addEmployee(mockData);
  expect(employeeInstance).toBeInstanceOf(Employee); // check if created instance is of type Employee.
  expect(Employee).toHaveBeenCalledTimes(1); // check how many instances were created.
});

it('The created instance will have all instance methods', () => {
  const employeeInstance = Consumer.addEmployee(mockData);
  expect(employeeInstance.getName()).toBe(mockData.name);
  expect(employeeInstance.getEmail()).toBe(mockData.email);
  expect(employeeInstance.getId()).toBe(mockData.id);
});

it('The received input will be valid', () => {
  const employeeInstance = Consumer.addEmployee(mockData);
  expect(employeeInstance.getName()).toMatch(nameRegex);
  expect(employeeInstance.getEmail()).toMatch(emailRegex);
  expect(employeeInstance.getId()).toMatch(numberRegex);
});
