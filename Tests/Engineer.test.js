const Engineer = require("../lib/Engineer");

test(" constructor function allows user to set github username", () => {
    const github = "osir-is";
    const employee = new Engineer("Feras F", 1, "ferasfaid@hotmail.com", github);
    expect(employee.github).toBe(github);
});

test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Feras F", 1, "ferasfaid@hotmail.com", "osir-is");
    expect(employee.getRole()).toBe(role);
});