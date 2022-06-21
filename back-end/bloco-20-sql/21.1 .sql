SELECT UCASE (title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film
WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film 
WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film
WHERE film_id = 1;

SELECT CHAR_LENGTH(title) FROM sakila.film
WHERE film_id = 1;

SELECT SUBSTRING(title, 5, 2) FROM sakila.film 
WHERE film_id = 1;

SELECT SUBSTRING(title,5) FROM sakila.film
WHERE film_id = 1;


SELECT first_name, active, IF(active, 'Cliente ativo', 'Cliente inativo') AS status
FROM sakila.customer
LIMIT 20;

SELECT first_name, email,
CASE
	WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
    WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de medio valor'
    WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
    ELSE 'não classificado'
END AS valor
FROM sakila.customer
LIMIT 10;

SELECT * FROM sakila.film;
SELECT film_id, title, IF(title LIKE '%BA%', 'Já assiste o filme','Não conheço o filme') AS 'Conheço o filme?'
FROM sakila.film;

SELECT title, rating,
	CASE 
    WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menos de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menos de 18 anos'
    ELSE 'Proibido para menores de idade'
END AS 'público-alvo'
    FROM sakila.film;
    
    
    SELECT 7 + 6;
    SELECT 5 - 5;
    SELECT 5 * 5 ;
    SELECT 5 / 5;
    
    SELECT IF(15 MOD 2 = 0, 'Par','Impar') AS 'Par ou impar';
    
    SELECT 220 DIV 12 AS 'grupos';
        SELECT 220 MOD 12 AS 'SObrando';
        
        
       /* Para fixar*/

		/*Monte uma query que gere um valor entre 15 e 20.*/
        SELECT ROUND(15 + RAND() * 5);
        
        /*Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.*/
        SELECT ROUND(15.7515971,5);
		/*Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?*/
        SELECT FLOOR(39.494);
        /*Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?*/
        SELECT CEIL(85.234);
        
        SELECT CURRENT_DATE();
        SELECT NOW();
        SELECT DATEDIFF('1992-09-06', '2022-06-01');
        SELECT YEAR(CURRENT_DATE());
        SELECT HOUR(NOW());
        
	/*Para fixar*/
    /*Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.*/
    SELECT DATEDIFF('2030-01-20','2022-06-01');
    /*Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.*/
    SELECT TIMEDIFF('10:25:45','11:00:00');
    
    /*Para fixar*/
    /*A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
*/
SELECT * FROM sakila.film;
SELECT AVG(length) AS 'Duração' FROM sakila.film;
/*A duração mínima dos filmes como 'Duração Mínima';
*/
SELECT MIN(length) AS 'Duração Minima' FROM sakila.film;
/*A duração máxima dos filmes como 'Duração Máxima';
*/
SELECT MAX(length) AS 'Duração Maxima' FROM sakila.film;
/*A soma de todas as durações como 'Tempo de Exibição Total';
*/
SELECT SUM(length) AS 'Tempo total' FROM sakila.film;
/*E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
*/
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;


SELECT rating, AVG(length) FROM sakila.film
GROUP BY rating;

SELECT rating, MIN(replacement_cost) FROM sakila.film
GROUP BY rating;
    
SELECT rating, MAX(replacement_cost) FROM sakila.film
GROUP BY rating;

SELECT rating, SUM(replacement_cost) FROM sakila.film
GROUP BY rating;


	/*Para fixar*/
    	/*Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
*/
SELECT active, COUNT(*) FROM sakila.customer
GROUP BY active;
	/*Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
*/
SELECT store_id, active, COUNT(*) FROM sakila.customer
GROUP BY store_id, active;
	/*Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
*/
SELECT AVG(rental_duration) AS 'Média de locação', rating FROM sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;
	/*Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
*/
SELECT district AS 'Distrito', COUNT(address) AS 'Quantidade de endereços' FROM sakila.address
GROUP BY district
ORDER BY COUNT(address) DESC;

SELECT * FROM sakila.address;

	/*Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), 
    de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
*/
SELECT rating, AVG(length) AS duracao_media FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN (115.0) AND (121.50)
ORDER BY duracao_media DESC;

/*Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

*/
SELECT rating, SUM(replacement_cost) AS soma_total FROM sakila.film
GROUP BY rating
HAVING soma_total > 3950.50
ORDER BY soma_total ASC;