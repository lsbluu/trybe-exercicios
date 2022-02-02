// // Para fixar
// // Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .


// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Banana', 'Maça', 'Manga'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Pão', 'bolo', 'Açai'];

// const fruitSalad = (fruit, additional) => [...additional,...fruit];

// // console.log(fruitSalad(specialFruit, additionalItens));


// const dayWeek = {
//     workDays: ['Monday', 'Tuesday','Wednesday','Thursday','Friday'],
//     weekend: ['Saturday', 'Sunday'],
// }

// const {workDays: dias, weekend: FDS} = dayWeek;

// console.log(FDS);

// // // const days = [...weekend, ...workDays];

// // console.log(days);


const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;


  console.log(nationality);


  const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0