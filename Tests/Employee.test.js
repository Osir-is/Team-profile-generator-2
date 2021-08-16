const Employee = require("../lib/Employee");

test("constructor functions allows user to set name of employee", () => {
    const name = "Feras Faid";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("constructor functions allows useer to set id of employee using random id generator", () => {
    const id = "1";
    const employee = new Employee("Feras Faid", id, "FerasFaid@hotmail.com");
    expect(employee.id).toBe(id);
});

test("calling getEmail() is expected to return the inputted email", () => {
    const email = "FerasFaid@hotmail.com";
    const employee = new Employee("Feras Faid", 1, email);
    expect(employee.getEmail()).toBe(email);
});

test("calling getRole() expects the return of 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("Feras Faid", 1, "FerasFaid@hotmail.com");
    expect(employee.getRole()).toBe(role);
});