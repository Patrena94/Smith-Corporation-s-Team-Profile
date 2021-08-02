const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

jest.lib('../lib/Engineer.js');

const checkIfEqual = require('.../lib/Engineer.js');
test ('creates a Employee object',()=> {
    const Employee = new Employee('Carlton');
    expect(Employee.name).toBe('Carlton');
    expect(Employee.ID).toEqual(expect.any(Number));
    expect(Employee.Email).toEqual(expect.any(Email));
    expect(Employee.Edcuation).toEqual(expect.any(Education));
    expect(Employee.title).toEqual(expect.any(title));
});