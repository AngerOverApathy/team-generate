const { test } = require('jest')
const Manager = require('../lib/Manager.js')

test('creates manager object', () => {
    const manager = new Manager('Bob', 3505, 'bob@gmail.com', '1800-555-555', 'gitoutbob@github.com');

    expect(manager.officeNumber).toEqual(expect.any(Number))
})