import { employeesArr } from "./obj";
import { Employees } from "./types";

const filterSeniors = (arr: Employees): Employees => {
  return arr.filter((e) => e.Experience?.Title === "Senior");
};

console.log(filterSeniors(employeesArr));
