let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


let info2 = {
    personagem: 'Tio patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
}




//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

console.log('Bem vinda', info['personagem']);

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info['recorrente'] = 'sim';
console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for(let key in info){
    console.log(key);
}
console.log("   ")
//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for(let key in info){
    console.log(info[key]);
}
console.log("   ")
for(let key in info, info2){
    console.log(info[key], 'e', info2[key]);
    }