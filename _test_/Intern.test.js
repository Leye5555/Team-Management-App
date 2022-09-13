const Intern = require('../lib/Intern.js');

// create mock Intern data
const intern = new Intern({
  name: 'Agrant Test',
  email: 'agrant@gmail.com',
  id: 298,
  school: 'UniversityTest',
});

test('test to see if the role is correct', () => {
  expect(intern.getRole()).toEqual('Intern');
});
