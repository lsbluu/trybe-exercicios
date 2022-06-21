SELECT * FROM sakila.customer
WHERE email LIKE 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT first_name, active, store_id FROM sakila.customer
WHERE active is FALSE
AND store_id = 2
AND first_name NOT LIKE 'KENNETH';

SELECT * FROM sakila.film;

SELECT title, description, release_year, replacement_cost, rating FROM sakila.film 
WHERE rating = 'PG'
AND replacement_cost >= 18
ORDER BY title ASC, replacement_cost DESC
LIMIT 100;

SELECT * FROM sakila.customer
WHERE active IS TRUE AND store_id = '1';

SELECT * FROM sakila.film 
WHERE rating = 'NC-17' 
ORDER BY rental_rate ASC, title ASC
LIMIT 50;

SELECT * FROM sakila.film
WHERE title LIKE '%ace%';

SELECT * FROM sakila.film
WHERE description LIKE '%china';

SELECT * FROM sakila.film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

SELECT * FROM sakila.film
WHERE title LIKE '___gon%';

SELECT * FROM sakila.film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%'

SELECT * FROM sakila.film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT * FROM sakila.film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

SELECT * FROM sakila.payment
WHERE payment_id IN (269,239,126,399,142);

SELECT * FROM sakila.address
WHERE district IN ('QLD','Nagasaki','California','Attika','Mandalay','Nantou','Texas' );

SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford','henry','boyd','mason','morales','kennedy')
ORDER BY first_name ASC;

SELECT address_id, email FROM sakila.customer
WHERE address_id between (172) AND (176)
ORDER BY email ASC;

SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01'
ORDER BY payment_date ASC;

SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;

SELECT title, rating FROM sakila.film 
WHERE rating IN ('G','PG','PG-13')
ORDER BY title ASC
LIMIT 500;

SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) = '2005/05/25';

SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005/07/01' AND '2005/08/22'
ORDER BY payment_date ASC;

SELECT DATE(rental_date), YEAR(rental_date), MONTH(rental_date), DAY(rental_date), HOUR(rental_date), MINUTE(rental_date), SECOND(rental_date) FROM sakila.rental
WHERE rental_id LIKE '10330';