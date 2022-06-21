SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE '%GR%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca LIKE '2';

SELECT * FROM PecasFornecedores.Fornecimentos
INNER JOIN PecasFornecedores.Pecas AS P
INNER JOIN PecasFornecedores.Fornecedores AS F
ON Fornecimentos.code = P.code = F.code
WHERE F.code LIKE '%N%' ;

SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;

SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%F%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN '16.00' AND '39.00';

SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE order_date BETWEEN '2018/04/15' AND '2019/07/30';