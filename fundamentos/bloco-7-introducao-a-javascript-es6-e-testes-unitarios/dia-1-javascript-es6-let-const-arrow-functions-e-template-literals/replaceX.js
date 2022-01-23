function replaceX(str, frase){
let string = frase;
let replaced = string.replace(/x/gi, str);

console.log(replaced);
}


replaceX('pet',"Tryber x aqui!" );