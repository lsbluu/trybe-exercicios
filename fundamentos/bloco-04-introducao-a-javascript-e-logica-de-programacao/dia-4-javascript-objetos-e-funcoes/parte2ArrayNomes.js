/*Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .*/


let arrayNomes = ['Joséaaaaa', 'Lucassssssss', 'Nádiaaaaa', 'Fernanda', 'Cairo', 'Joanaaaaaaa'];
let maior = arrayNomes[0];

for(let i = 0; i<=arrayNomes.length-1; i+=1){
    console.log(arrayNomes[i]);

    if(arrayNomes[i].length > maior.length){
        maior = arrayNomes[i];
    }

  

    };

    console.log("Maior nome é :",maior);



    

