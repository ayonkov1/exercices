import { employeesArr } from "./obj";
import { Employees } from "./types";

//array map => join => ','

const splitArray = (arr: Employees) => {
  return arr.map((e) => e.Name.substring(0, 3)).join();
};

console.log(splitArray(employeesArr));
