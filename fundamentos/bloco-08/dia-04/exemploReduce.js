// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];


//   function flatten(arrays) {
//    return arrays.reduce((acc,number) =>(acc + number)) 
//   };

//   console.log(flatten(arrays));

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  function reduceNames() {
    return  books.map((book) => book.author.name).reduce((acc,value) => `${acc}, ${value}`);
//    return books.reduce((acc,value)=>(`${acc}, ${value.author.name}`))
  }
  console.log(reduceNames());

  function averageAge() {
   return books.reduce((acc,value) => acc+(value.releaseYear - value.author.birthYear),0)/books.length;
  }

  console.log(averageAge());


  function longestNamedBook() {
   return books.reduce((acc,value) => (acc.name.length > value.name.length) ? acc : value).name
  }

  console.log(longestNamedBook());