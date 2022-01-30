//1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
const people = [
    { name: 'Mateus', age: 13 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 190 },
  ];
  
 people.sort((a,b) => a.age - b.age);
  
  console.log(people);