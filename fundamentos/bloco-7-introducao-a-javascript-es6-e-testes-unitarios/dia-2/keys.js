let pessoa = {};

function keys(object,chave,valor){

object[chave] = valor;

console.log(object);
console.log(typeof object);

}


keys(pessoa,'nome','lucas');