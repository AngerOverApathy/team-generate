const Intern = require('../lib/Intern.js')

test('creates intern object', () => {
    const intern = new Intern('Bill', 666, 'bill@gmail.com', 'UC Davis');
    expect(typeof(intern)).toBe('object')
});

test('gets school value value', () => {
    const school = 'UC Davis'
    const intern = new Intern('Bill', 666, 'bill@gmail.com', school);
    expect(intern.school).toEqual(school);
});

test('get employee status', () => {
    const intern = new Intern('Bill', 666, 'bill@gmail.com', 'UC Davis');
    expect(intern.stateRole()).toEqual("Intern");
}); 