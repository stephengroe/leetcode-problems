-- First solution, solved 2024-06-21
-- MS SQL Server
SELECT Employee.name as Employee
FROM Employee
JOIN Employee AS Manager
    ON Manager.id = Employee.managerId
WHERE Employee.salary > Manager.salary
