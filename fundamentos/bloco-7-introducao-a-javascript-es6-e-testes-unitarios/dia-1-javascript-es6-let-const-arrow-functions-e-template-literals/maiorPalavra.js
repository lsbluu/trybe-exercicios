const frase = (f) => {
    let palavras = f.split(' ');
    let menor = palavras[0];
    for( let i = 0; i< palavras.length; i+=1){
        menor = palavras[i].length > menor.length ? palavras[i] : menor;
        console.log(`${palavras[i]}${i}`);
    }

    return menor;
}

console.log(frase('Antônio foi no banheiro e não sabemos o que aconteceu'));