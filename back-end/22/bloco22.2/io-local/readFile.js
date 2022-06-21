const fs = require('fs');
const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if(err) {
    console.error(`Não foi possivel ler o arquivo ${nomeDoArquivo} \n Erro: ${err}`);
    process.exit(1);
  }

  console.log(`Conteudo do arquivo ${data}`);
} );