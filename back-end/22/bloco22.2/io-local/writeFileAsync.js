const fs = require('fs').promises;

async function main(){
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo salvo com sucesso!');
  } catch(err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();