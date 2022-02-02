// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// [comida, animal] = [animal,comida];

// [bebida, comida] = [comida,bebida];


// console.log(comida, animal, bebida); // arroz gato água


// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .
// Copiar
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [,,,six,eigth,ten,twelve] = numerosPares;

console.log(six,eigth,ten,twelve); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo