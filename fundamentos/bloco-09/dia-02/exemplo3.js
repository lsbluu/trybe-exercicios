// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)),3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)),2000); // C

// const getPlanet = () => {
//     const mars = {
//         name: 'Mars',
//         distanceFromSun: {
//             value: 2279000000,
//             measurementUnit: 'Kilometers',
//         },
//     };
// setTimeout(()=>console.log('Returned planet: ', mars),4000);

// };


// getPlanet();





// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//     const maxTemperature = 58;
//     return Math.floor(Math.random()*maxTemperature);
// };


// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

//   const handleError = (errorReason) => {
//       console.log((`Error getting temperature: ${errorReason}`));
//   }





// sendMarsTemperature = (callback, errorCallback) => {
//     setTimeout(()=>{

//         const sucess = Math.random() >= 0.6

//         if(sucess){
//             callback(getMarsTemperature());
//         } else {
//             const erroMessage = 'Robot is busy';
//             errorCallback(erroMessage);
//         }


     
//     },messageDelay());
// }

// sendMarsTemperature(greet,handleError );


