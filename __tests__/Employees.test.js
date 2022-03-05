const Employee = require('../lib/Employees');

test('creates an employee object', () => {
    const employee = new Employee('Mark', 75, 'markymark@gmail.com');
    expect(typeof(employee)).toBe('object');
});

test('gets employee name', () => {
    const testName = 'Mark'
    const employee = new Employee(testName, 75, 'markymark@gmail.com');
    expect(employee.name).toEqual(testName);
});

test('gets employee ID', () => {
    const employee = new Employee('Mark', 75, 'markymark@gmail.com');
    expect(employee.idInput()).toEqual(employee.id);
});

test('gets employee email', () => {
    const employee = new Employee('Mark', 75, 'markymark@gmail.com');
    expect(employee.emailInput()).toEqual(employee.email);
});

test('gets role of employee', () => {
    const employee = new Employee('Mark', 75, 'markymark@gmail.com');
    expect(employee.stateRole()).toEqual("Employee");
}); 