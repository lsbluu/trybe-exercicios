// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  


//   emailListInData.forEach(showEmailList);


// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (element) => {
//   if(element % 3 === 0 && element % 2 === 0){
//       return element;
//   }
// }


// console.log(numbers.find(findDivisibleBy3And5))


//2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   const namess = names.find( (element) => element.length === 5)
//   return namess;};

// console.log(findNameWithFiveLetters());



//3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    const encontrado = musicas.find( (element) => element.id === id )
    return encontrado;
  }
  
  console.log(findMusic('31031685'))