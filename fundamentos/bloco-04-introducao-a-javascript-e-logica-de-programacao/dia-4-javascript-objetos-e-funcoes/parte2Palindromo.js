/*1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false*/


console.log(verificaPalindrome('banana'));
function verificaPalindrome(string){
    let palindromo = '';
  for(let i = string.length-1; i >=0; i--){
    palindromo += string[i];
  }

  if(palindromo === string){
      return true;
  } else{
      return false;
  }

};






