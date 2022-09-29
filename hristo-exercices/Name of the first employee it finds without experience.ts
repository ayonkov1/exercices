import { employeesArr } from "./obj";
import { Employees } from "./types";

const nameWithNoXp = (arr: Employees) => {
  let foundEmployee = arr.find((e) => !e.Experience);
  return foundEmployee?.Name;
};

console.log(nameWithNoXp(employeesArr));
