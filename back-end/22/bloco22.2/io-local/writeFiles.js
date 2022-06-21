const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão seu FDP')
.then(() => {
  console.log('Arquivo escrito com sucesso!');
})
.catch((err) => {
  console.error(`erro ao escrever o arquivo seu FDP: ${err.message}`);
});