const Manager = require('../lib/Manager.js')

test('creates manager object', () => {
    const manager = new Manager('Bob', 3505, 'bob@gmail.com', '1800-555-555');
    expect(typeof(manager)).toBe('object')
});

test('creates manager officenumber', () => {
    const number = '1800-555-555'
    const manager = new Manager('Bob', 3505, 'bob@gmail.com', number);
    expect(manager.officeNumber).toEqual(number)
});

test('assign employee status', () => {
    const manager = new Manager('Bob', 3505, 'bob@gmail.com', '1800-555-555', 'gitoutbob@github.com');
    expect(manager.stateRole()).toEqual("Manager");
}); 