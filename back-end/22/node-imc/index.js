/*Crie um arquivo index.js que pergunta qual dos scripts que foram criados anteriormente deve ser executado.
O script deve ser acionado através do comando npm start.
Utilize o readline-sync para realizar o input de dados.
Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.
Ao digitar o número de um script e pressionar enter, o script deve ser executado.
Você pode utilizar o require para executar o script em questão. */
const readline = require('readline-sync');
const velocity = require('./velocidade');
const sort = require('./sorteio');
const handleImc = require('./imc');

do {
  const choose = readline.questionInt("Escolha uma opção \n 1 - IMC \n 2 - Sorteio \n 3 - Velocidade \n Opção: ");
  switch (choose) {
    case 1:
      handleImc.handleImc();
    break;
    case 2:
      sort.sort();
    break;
    case 3:
      velocity.velocity();
      break;
  
    default:
      'Opção não existe'
      break;
  }

  op = readline.questionInt("1 - para encerrar \n Tente de novo: ");
} while (op != 1 );




