const a = 100;
const b = 40;
const c = 40;

let soma = a+b+c;


if(a < 0 || b < 0 || c < 0 ){
    console.log("Erro");
}else if(soma != 180){
    console.log(false);
}else if (soma === 180){
    console.log(true)
}

