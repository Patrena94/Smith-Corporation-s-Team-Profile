// const { test, expect } = require('@jest/globals');
// const checkIfEqual = require('.../lib/Employee');
test ('creates a Employee object',()=> {
    const Employee = new Employee('Carlton');
    expect(Employee.name).toBe('Carlton');
    expect(Employee.ID).toEqual(expect.any(Number));
    expect(Employee.Email).toEqual(expect.any(Email));
    expect(Employee.Edcuation).toEqual(expect.any(Education));
    expect(Employee.title).toEqual(expect.any(title));
});
// test('checks if 10 is equal to 10', ()=> {
//     expect(checkIfEqual)(10, 10).toBe(true);
// });
