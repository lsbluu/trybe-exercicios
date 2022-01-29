const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const gabarito = (RIGHT,STUDENT,verifica) =>{
    const gabarito = RIGHT;
    const studentGabarito = STUDENT;
    const result = verifica(gabarito,studentGabarito)
    return result;
    }


const verifica = (gabarito,studentGabarito) => {
     let pontos = 0;

    for(let i = 0 ; i<gabarito.length; i+=1){
      if(gabarito[i] === studentGabarito[i]){
        pontos += 1;
      }else if(studentGabarito[i] === 'N.A'  ){
        pontos +=0;

      } else if(gabarito[i] !== studentGabarito[i]){
        pontos -=0.5;
      };
     
    }
return pontos;
};


console.log(gabarito(RIGHT_ANSWERS,STUDENT_ANSWERS,verifica));