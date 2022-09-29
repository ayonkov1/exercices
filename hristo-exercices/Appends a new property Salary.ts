import { employeesArr } from "./obj";
import { Employees } from "./types";

const addSalary = (employees: Employees): Employees => {
  return employees.map((e) => ({
    ...e,
    Salary: {
      Amount: null,
      ...(e.Experience?.Title === "Senior" && { Amount: 5000 }),
      ...(e.Experience?.Title === "Mid" && { Amount: 2000 }),
    },
  }));
};

console.log(addSalary(employeesArr));
