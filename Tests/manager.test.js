
const Manager = require("../lib/Manager");

test("constructor functions allows the ability to set managers office number", () => {
    const officeNumber = "1801";
    const employee = new Manager("Feras", 1, "ferasfaid@hotmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test("when called getRole() should return manager", () => {
    const role = "Manager";
    const employee = new Manager("Feras", 1, "ferasfaid@hotmail.com", "osir-is");
    expect(employee.getRole()).toBe(role);
});