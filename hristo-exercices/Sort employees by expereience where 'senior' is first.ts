import { employeesArr } from "./obj";
import { Employees } from "./types";

const findSenior = (arr: Employees) => {
  return arr.sort((a) => (a.Experience?.Title === "Senior" ? -1 : 1));
};

console.log(findSenior(employeesArr));
