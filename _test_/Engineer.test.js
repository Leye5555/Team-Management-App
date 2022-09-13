const Engineer = require('../lib/Engineer.js');

// create mock Engineer data
const engineer = new Engineer({
  name: 'Agrant Test',
  email: 'agrant@gmail.com',
  id: 298,
  github: 'agrantDev',
});

test('test to see if the role is correct', () => {
  expect(engineer.getRole()).toEqual('Engineer');
});
