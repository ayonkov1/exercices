import { employeesArr } from "./obj";

let array = employeesArr;

// Dot property accessor requires identifiers
let value = array[0].Name;

// Square brackets property accessor
const key = `Name`;
const value1 = array[key];

// Object destructuring
const { Name } = array[0];

// Alias variable
const { Name: employeeName } = array[0];

// Dynamic property name
const property = "Name";
const { [property]: employeeName2 } = array[0];

console.log(value, value1, Name, employeeName, employeeName2);
