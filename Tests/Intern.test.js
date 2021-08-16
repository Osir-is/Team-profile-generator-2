const Intern = require("../lib/Intern");

test("constructor function should allow user the ability to set school", () => {
    const school = "";
    const employee = new Intern("Feras", 1, "ferasfaid@hotmail.com", school);
    expect(employee.school).toBe(school);
});

test("when getRole() is called intern should be returned", () => {
    const role = "Intern";
    const employee = new Intern("Feras", 1, "ferasfaid@hotmail.com", "osir-is");
    expect(employee.getRole()).toBe(role);
});