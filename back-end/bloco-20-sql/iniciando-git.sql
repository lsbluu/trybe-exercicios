SELECT * FROM sakila.actor
WHERE first_name = 'MATTHEW';


DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM sakila.film_actor;
DELETE FROM sakila.film_actor
WHERE actor_id IN (8,103,181);

SELECT * FROM sakila.film_text
WHERE description LIKE '%saga%';
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%' ;

SELECT * FROM sakila.film_actor;
TRUNCATE sakila.film_actor;

SELECT * FROM sakila.film_category;
TRUNCATE sakila.film_category;