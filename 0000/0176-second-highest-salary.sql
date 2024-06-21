-- First solution, solved 2024-06-21
-- MS SQL Server
SELECT max(Employee.salary) AS SecondHighestSalary
FROM Employee
WHERE Salary <> (
    SELECT max(Employee.salary)
    FROM Employee
);
