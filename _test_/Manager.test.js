const Manager = require('../lib/Manager.js');

// create mock manager data
const manager = new Manager({
  name: 'Agrant Test',
  email: 'agrant@gmail.com',
  id: 298,
  officeNumber: 288,
});

test('test to see if the role is correct', () => {
  expect(manager.getRole()).toEqual('Manager');
});
