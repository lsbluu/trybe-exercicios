// // Para Fixar
// // 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .
// // Copiar

// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const result = {...user, ...jobInfos};

// const destru = ({name, age, nationality, profession, squad, squadInitials }) => {

//     return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;
// }


// console.log(destru(result));


// Para Fixar
// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .

//So vai usar nacionality = Brazilia, caso não exista a chave no objeto.
// const getNationality = ({ firstName,nationality = "Brazilian" }) => {
//     return `${firstName} is ${nationality}`};


// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };


// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));


// Para Fixar
// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand .
// Copiar

const getPosition = (latitud, longitude) => ({
  latitud,
  longitude});

console.log(getPosition(-19.8157, -43.9542));


