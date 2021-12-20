/*
1 - Crie um objeto player contendo as variáveis listadas abaixo.
Copiar
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

*/


let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2, silver: 3,
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log("A jogadora", player['name'], player['lastName'],"tem", player['age'], "anos de idade");
console.log("A jogadora Marta Silva foi eleita a melhor do mundo por",player['bestInTheWorld'].length,"vezes");

console.log("A jogadora",player['name'],player['lastName'],"possui,",player['medals'].golden,"medalhas de ouro e",player['medals'].silver,"medalhas de prata");