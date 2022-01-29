const acordar = () => 'Acordando!!!';
const cafe = () => 'Bora tomar café!!!';
const dormir = () => "Partiu dormir!!!";

const doingThings = (callback) => callback();


console.log(doingThings(cafe));