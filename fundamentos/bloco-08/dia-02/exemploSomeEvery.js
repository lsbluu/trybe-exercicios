//O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:

// const listNames = ['Maria', 'Manuela', 'Jorge','Ricardo'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J',listNames));


//O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:

const grades = {
    portugues: 'Aprovado',
    matematica: 'Aprovado',
    ingles: 'Reprovado',
};


const verifyGrades = (studentGrades) => {
    return Object.values(studentGrades).every((grade) => grade === 'Aprovado' );
}

console.log(verifyGrades(grades));