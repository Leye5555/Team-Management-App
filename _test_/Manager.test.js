const Consumer = require('../lib/Consumer.js');
const Manager = require('../lib/Manager.js');
const { nameRegex, emailRegex, numberRegex } = require('../utils/regex.js');
// import mock class
jest.mock('../lib/Manager.js');

const mockData = {
  name: 'Agrant Test',
  email: 'agrant@gmail.com',
  id: '298',
  officeNumber: '34',
};

beforeAll(() => {
  // clear open mock instances
  Manager.mockClear();

  jest
    .spyOn(Manager.prototype, 'getName')
    .mockImplementation(() => mockData.name);
  jest
    .spyOn(Manager.prototype, 'getEmail')
    .mockImplementation(() => mockData.email);
  jest.spyOn(Manager.prototype, 'getId').mockImplementation(() => mockData.id);
  jest
    .spyOn(Manager.prototype, 'getOfficeNumber')
    .mockImplementation(() => mockData.officeNumber);
});

afterAll(() => {
  jest.restoreAllMocks();
});

it('The Consumer class will create an Manager instance', () => {
  const managerInstance = Consumer.addManager(mockData);
  expect(managerInstance).toBeInstanceOf(Manager); // check if created instance is of type Manager.
  expect(Manager).toHaveBeenCalledTimes(1); // check how many instances were created.
});

it('The created instance will have all instance methods', () => {
  const managerInstance = Consumer.addManager(mockData);
  expect(managerInstance.getName()).toBe(mockData.name);
  expect(managerInstance.getEmail()).toBe(mockData.email);
  expect(managerInstance.getId()).toBe(mockData.id);
  expect(managerInstance.getOfficeNumber()).toBe(mockData.officeNumber);
});

it('The received input will be valid', () => {
  const managerInstance = Consumer.addManager(mockData);
  expect(managerInstance.getName()).toMatch(nameRegex);
  expect(managerInstance.getEmail()).toMatch(emailRegex);
  expect(managerInstance.getId()).toMatch(numberRegex);
  expect(managerInstance.getOfficeNumber()).toMatch(numberRegex);
});
