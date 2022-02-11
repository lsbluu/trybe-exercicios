// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1),3000) ;
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => console.log(numbers),3000 ) ;


// // Definição da função userFullName
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({firstName, nationality}) => `${firstName} is ${nationality}`;

// // Definição da função getUser
// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // Retornamos nosso parâmetro, que será uma função (callback)
//   return param(userToReturn);
// };

// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// console.log(getUser(userNationality));




const userFullName = ({firstName, lastName}) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({firstName,nationality}) => `${firstName} is ${nationality}`

const delay = (maxMilliSeconds = 5000) => Math.floor(Math.random() * maxMilliSeconds);


const getUser = (callback) => {
    setTimeout(() => {
        const user = {
            firstName: "Lucas",
            lastName: "Minari",
            nationality: 'Brazilian',
        };
        return console.log(callback(user));

    }, delay());
};


getUser(userFullName);
getUser(userNationality);

