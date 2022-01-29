const newEmployees = (myFunction) => {
    const employees = {
        id1: myFunction('Pedro Guerra'),
        id2: myFunction('Luiza Drumond'),
        id3: myFunction('Carla Paiva'),
    }
    return employees;
}


const myFunction = (fullName) => {
    const name = fullName;
    const email = `${fullName.toLowerCase().replace(" ", "")}@trybe.com.br`;
       return {Nome: name, Email: email};
} 

console.log(newEmployees(myFunction));



