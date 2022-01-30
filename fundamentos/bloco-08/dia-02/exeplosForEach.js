// const numbers = [0,1,2,3,4,5,6,7,8,9];

// const multiplesFor2 = (element) =>{
//     console.log((`${element} * 2: ${element * 2}`));
// };

// numbers.forEach(multiplesFor2);


const NAMES = ['Lucas', 'Yara', 'Tina'];

const converToUpperCase = (name, index) => {
    NAMES[index] = name.toUpperCase();
  
};

NAMES.forEach(converToUpperCase);

console.log(NAMES);