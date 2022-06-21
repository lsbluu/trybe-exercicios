SELECT
	CONCAT(Employee.first_name, ' ', Employee.last_name) AS 'Pessoa colaboradora',
    CONCAT(Manager.first_name, ' ', Manager.last_name) AS 'Gerente'
FROM
	employees AS Employee
INNER JOIN
	employees AS Manager 
    ON Employee.manager_id = Manager.employee_id;
    
    
SELECT employee.first_name, manager.first_name 
FROM employees AS employee
INNER JOIN employees AS manager
ON employee.manager_id = manager.employee_id
WHERE employee.department_id <> manager.department_id;

SELECT manager.first_name AS 'Gerente', COUNT(*) AS 'Empregados'
FROM employees AS manager
INNER JOIN employees AS employee
    ON employee.manager_id = manager.employee_id
    GROUP BY manager.first_name;
