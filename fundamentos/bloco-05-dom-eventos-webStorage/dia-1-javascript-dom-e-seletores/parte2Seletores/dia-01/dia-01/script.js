let titulo = document.querySelector('#header-container');
let fundo = document.querySelector('body');
let rodape = document.querySelector('#footer-container');
let emergencyTitulo = document.querySelectorAll('.emergency-tasks h3');
let emergencyTitulo2 = document.querySelectorAll('.no-emergency-tasks h3');
let fundoEmergency = document.querySelectorAll('.emergency-tasks div');
let fundoNoEmergency = document.querySelectorAll('.no-emergency-tasks div');


fundo.style.backgroundColor = '#D3D3D3';
titulo.style.backgroundColor = '#1EFFAD';
rodape.style.backgroundColor = '#187111';


for(let i = 0; i<emergencyTitulo.length;i+=1){
    emergencyTitulo[i].style.backgroundColor = "#B80FE5";
};

for(let i = 0; i<emergencyTitulo2.length;i+=1){
    emergencyTitulo2[i].style.backgroundColor = "#000000";
};

for(let i = 0; i<fundoEmergency.length;i+=1){
    fundoEmergency[i].style.backgroundColor = "#F2862C";
};

for(let i = 0; i<fundoNoEmergency.length;i+=1){
    fundoNoEmergency[i].style.backgroundColor = "#FFF000";
};



console.log(emergencyTitulo)

