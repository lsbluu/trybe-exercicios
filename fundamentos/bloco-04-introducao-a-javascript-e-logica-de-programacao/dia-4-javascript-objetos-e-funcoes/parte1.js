let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O pior dia de todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};


// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
console.log('O livro favorito',leitor['nome'], leitor['sobrenome'], 'se chama', leitor.livrosFavoritos[0].titulo);




//7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
leitor.livrosFavoritos.push({titulo:'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK', editora: 'ROCCO'  });

console.log('Julia tem',leitor.livrosFavoritos.length,'livros favoritos');