// const objPeople = [
//     {name: 'José', age: 16},
//     {name: 'Maria', age: 16},
//     {name: 'Pedro', age: 16},
//     {name: 'Sergio', age: 16},
//     {name: 'Lucas', age: 15},
//     {name: 'Fabio', age: 16},

// ]

// const verifyAgeDrive = (arrayOfPeople) => {
//    return arrayOfPeople.filter((people)=>people.age < 18)
// };


// console.log(verifyAgeDrive(objPeople));

//array de nomes
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// variavel constante recebe uma arrow function com os parametros de nome e do array de nomes

const removeStudentByName = (name, listStudents) => {
//filter aplicado no array de estudantes do parametro, compara de o elemento é diferente do nome fornecido em parametro e retorna o array sem o nome informado.
    return   listStudents.filter((student)=> student !== name);
}
// é atribuido a função com retorno de filtro para variavel newList
const newList = removeStudentByName('Manuela', arrayMyStudents);

console.log(newList);
