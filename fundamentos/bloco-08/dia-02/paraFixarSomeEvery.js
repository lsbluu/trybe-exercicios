// // Para fixar
// // 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;


// const NAMES = ['Matheus', 'Lucas', 'Ana','Claudio','Bruna'];

// const hasName = (arrayNames, findName) => {
//   return arrayNames.some((name) => name === findName );
// };


// console.log(hasName(NAMES, 'Lucas'));



//2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
    {name: 'Lucas' ,age:18},
    {name:'Bruna' ,age:18},
    {name:'Sergio' ,age:35},
    {name:'Carlos' ,age:36},
    {name:'Sandro' ,age:29},
    {name:'Zeca' ,age:70},
    {name:'Pagodinho' ,age:85},
];


const verifyAges = (arrayPeople, minimunAge) => {
    return arrayPeople.every((people)=>people.age >= minimunAge);

};




console.log(verifyAges(people,18));
console.log(people.sort((a,b) => a.age - b.age));