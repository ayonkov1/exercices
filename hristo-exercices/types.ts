export type Employee = {
  Age: number;
  job: string;
  Experience?: {
    Title: string;
  };
  Name: string;
  Salary?: {
    Amount: number | null;
  };
};

export type Employees = Array<Employee>;
