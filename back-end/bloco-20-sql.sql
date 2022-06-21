SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 10 AS N1, 20 AS N2, 30 AS N3;
SELECT 10+15 AS Soma;
SELECT CONCAT('Multiplicação: ', 10*5) AS Resultado;

Select * FROM Scientists.Scientists;

Select Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

Select Name AS Nome FROM Scientists.Scientists ORDER BY Name ASC;
Select Name AS Projetos FROM Scientists.Projects ORDER BY Name DESC;
SELECT CONCAT('O Projeto ', Name,' Precisou de ', Hours, ' horas para ser concluído.') FROM Scientists.Projects;
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM Scientists.AssignedTo;
SELECT MAX(Hours) AS Horas, Name AS Nome FROM Scientists.Projects
GROUP BY Nome ORDER BY Horas DESC LIMIT 1;

SELECT Hours, Name FROM Scientists.Projects
ORDER BY Hours ASC LIMIT 1;

SELECT Hours, Name FROM Scientists.Projects
ORDER BY Hours ASC LIMIT 5;

SELECT CONCAT('Existem ',COUNT(Name), ' na tabela Scientists.' ) FROM Scientists.Projects;
