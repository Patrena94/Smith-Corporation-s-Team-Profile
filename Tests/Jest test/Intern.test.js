const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

jest.lib('../lib/Intern.js');

const checkIfEqual = require('.../lib/Intern.js');
test ('creates a Employee object',()=> {
    const Employee = new Employee('Carlton');
    expect(Employee.name).toBe('Carlton');
    expect(Employee.ID).toEqual(expect.any(Number));
    expect(Employee.Email).toEqual(expect.any(Email));
    expect(Employee.Edcuation).toEqual(expect.any(Education));
    expect(Employee.title).toEqual(expect.any(title));
});