const Consumer = require('../lib/Consumer.js');
const Intern = require('../lib/Intern.js');
const {
  nameRegex,
  emailRegex,
  numberRegex,
  schoolRegex,
} = require('../utils/regex.js');
// import mock class
jest.mock('../lib/Intern.js');

const mockData = {
  name: 'Agrant Test',
  email: 'agrant@gmail.com',
  id: '298',
  school: 'Stanford',
};

beforeAll(() => {
  // clear open mock instances
  Intern.mockClear();

  jest
    .spyOn(Intern.prototype, 'getName')
    .mockImplementation(() => mockData.name);
  jest
    .spyOn(Intern.prototype, 'getEmail')
    .mockImplementation(() => mockData.email);
  jest.spyOn(Intern.prototype, 'getId').mockImplementation(() => mockData.id);
  jest
    .spyOn(Intern.prototype, 'getSchool')
    .mockImplementation(() => mockData.school);
});

afterAll(() => {
  jest.restoreAllMocks();
});

it('The Consumer class will create an Intern instance', () => {
  const internInstance = Consumer.addIntern(mockData);
  expect(internInstance).toBeInstanceOf(Intern); // check if created instance is of type Intern.
  expect(Intern).toHaveBeenCalledTimes(1); // check how many instances were created.
});

it('The created instance will have all instance methods', () => {
  const internInstance = Consumer.addIntern(mockData);
  expect(internInstance.getName()).toBe(mockData.name);
  expect(internInstance.getEmail()).toBe(mockData.email);
  expect(internInstance.getId()).toBe(mockData.id);
  expect(internInstance.getSchool()).toBe(mockData.school);
});

it('The received input will be valid', () => {
  const internInstance = Consumer.addIntern(mockData);
  expect(internInstance.getName()).toMatch(nameRegex);
  expect(internInstance.getEmail()).toMatch(emailRegex);
  expect(internInstance.getId()).toMatch(numberRegex);
  expect(internInstance.getSchool()).toMatch(schoolRegex);
});
