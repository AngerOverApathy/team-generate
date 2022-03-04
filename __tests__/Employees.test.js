const Employee = require('./lib/Employees')

test('creates an employee object', () => {
    const employee = new Employee('Mark', 75, 'markymark@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Mark', 75, 'markymark@gmail.com');

    expect(employee.nameInput()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Mark', 75, 'markymark@gmail.com');

    expect(employee.idInput()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Mark', 75, 'markymark@gmail.com');

    expect(employee.emailInput()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Mark', 75, 'markymark@gmail.com');

    expect(employee.stateRole()).toEqual("Employee");
}); 