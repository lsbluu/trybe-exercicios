SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

SELECT * FROM sakila.film_actor;
/*Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
*/
SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.film_id;

/*Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
*/
SELECT s.first_name, s.last_name, a.address 
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.staff_id = a.address_id;

/*Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
*/
SELECT c.customer_id, c.first_name, c.email, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.customer_id = a.address_id 
ORDER BY c.first_name DESC
LIMIT 100;

/*Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
*/
SELECT c.first_name, c.email, a.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.customer_id = a.address_id
WHERE a.district = 'California' OR c.first_name LIKE '%rene%' ;

SELECT c.first_name, COUNT(*) AS 'Endereços'
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.customer_id = a.address_id
WHERE c.active IS TRUE
GROUP BY c.first_name
ORDER BY c.first_name DESC;

SELECT * FROM sakila.film_actor ;

SELECT s.first_name, s.last_name, AVG(p.amount), p.payment_date 
FROM sakila.payment AS p
INNER JOIN sakila.staff AS s
ON p.staff_id = s.staff_id
WHERE payment_date LIKE '2006%'
GROUP BY s.first_name, s.last_name, p.payment_date;

SELECT a.actor_id, a.first_name, f_a.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f_a
ON a.actor_id = f_a.actor_id
INNER JOIN sakila.film AS f
ON f_a.film_id = f.film_id;


SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;


SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;


SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

