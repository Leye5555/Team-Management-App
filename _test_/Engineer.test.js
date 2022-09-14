const Consumer = require('../lib/Consumer.js');
const Engineer = require('../lib/Engineer.js');
const {
  nameRegex,
  emailRegex,
  numberRegex,
  profileRegex,
} = require('../utils/regex.js');
// import mock class
jest.mock('../lib/Engineer.js');

const mockData = {
  name: 'Agrant Test',
  email: 'agrant@gmail.com',
  id: '298',
  github: 'agrant79',
};

beforeAll(() => {
  // clear open mock instances
  Engineer.mockClear();

  jest
    .spyOn(Engineer.prototype, 'getName')
    .mockImplementation(() => mockData.name);
  jest
    .spyOn(Engineer.prototype, 'getEmail')
    .mockImplementation(() => mockData.email);
  jest.spyOn(Engineer.prototype, 'getId').mockImplementation(() => mockData.id);
  jest
    .spyOn(Engineer.prototype, 'getGithub')
    .mockImplementation(() => mockData.github);
});

afterAll(() => {
  jest.restoreAllMocks();
});

it('The Consumer class will create an Engineer instance', () => {
  const engineerInstance = Consumer.addEngineer(mockData);
  expect(engineerInstance).toBeInstanceOf(Engineer); // check if created instance is of type Engineer.
  expect(Engineer).toHaveBeenCalledTimes(1); // check how many instances were created.
});

it('The created instance will have all instance methods', () => {
  const engineerInstance = Consumer.addEngineer(mockData);
  expect(engineerInstance.getName()).toBe(mockData.name);
  expect(engineerInstance.getEmail()).toBe(mockData.email);
  expect(engineerInstance.getId()).toBe(mockData.id);
  expect(engineerInstance.getGithub()).toBe(mockData.github);
});

it('The received input will be valid', () => {
  const engineerInstance = Consumer.addEngineer(mockData);
  expect(engineerInstance.getName()).toMatch(nameRegex);
  expect(engineerInstance.getEmail()).toMatch(emailRegex);
  expect(engineerInstance.getId()).toMatch(numberRegex);
  expect(engineerInstance.getGithub()).toMatch(profileRegex);
});
