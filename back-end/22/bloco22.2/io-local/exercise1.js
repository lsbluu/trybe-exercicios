

const returnPromise = (n1,n2,n3) =>  {

  const promise = new Promise((resolve, reject) => {
    if(Number(n1) && Number(n3) && Number(n2) ) {
      const sum = ((n1 + n2) * n3);

      if(sum > 50) {
       resolve (`A soma é: ${sum}`);

      }
      if(sum < 50) {
       reject(new Error('Valor muito baixo!.'));     
      }
   } 
   reject(new Error('Informe apenas números.'));
   
  })
  return promise;
}

randonN1 = Math.floor(Math.random() * 100 + 1);
randonN2 = Math.floor(Math.random() * 100 + 1);
randonN3 = Math.floor(Math.random() * 100 + 1);

async function main(){
  try {
        console.log(await returnPromise(randonN1,randonN2,randonN3));
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}
main();





