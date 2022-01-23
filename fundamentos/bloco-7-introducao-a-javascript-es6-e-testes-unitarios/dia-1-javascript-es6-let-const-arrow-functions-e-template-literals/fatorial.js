const fatorial = (n) => !(n > 1) ? 1 : (fatorial(n-1)*n);


console.log(fatorial(6));