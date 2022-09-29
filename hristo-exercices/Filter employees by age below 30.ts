import { employeesArr } from "./obj";
import { Employees } from "./types";

const findSenior = (arr: Employees) => {
  return arr.filter((e) => e.Age < 30);
};

console.log(findSenior(employeesArr));
