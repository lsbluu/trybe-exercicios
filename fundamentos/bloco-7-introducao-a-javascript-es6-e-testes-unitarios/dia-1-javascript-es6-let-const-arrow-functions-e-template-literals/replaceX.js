const skills = ['HTML','JavaScript','CSS'];

function replaceX(str, frase){
let string = frase;
let replaced = string.replace(/x/gi, str);
skills.sort();
 
console.log(`${replaced}! Minhas principais habilidade são ${ skills } ` ); 
}
replaceX('beto', "Tryber x aqui!");