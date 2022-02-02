const UF = document.querySelector('#estados');
const estados = ['DF','SP','GO'];


function ufs() {
   for(let i=0; i<estados.length; i+=1){
      let ufs = estados[i];
      let options = document.createElement('option')
      options.innerHTML = ufs;
      options.value = estados[i];
      UF.appendChild(options);
     }
}

ufs();


const NOME = document.getElementById('name');
const EMAIL = document.getElementById('email')
const CPF = document.getElementById('cpf');
const END = document.getElementById('end');
const MORADIA = document.querySelectorAll("input[type='radio']")
const RESUMO = document.getElementById('resumo');
const data = document.getElementById('data');
const btn = document.getElementById('enviar');
const show = document.getElementById('show');


btn.addEventListener('click', form)

function form(event) {
  event.preventDefault();

   let pNome = document.createElement('p');
   let pEmail = document.createElement('p');
   let pUF = document.createElement('p')
   let pMoradia = document.createElement('p');
   let pResumo = document.createElement('p');
   let pEnd = document.createElement('p')
   let pCpf = document.createElement('p');
   let pData = document.createElement('p');

   pEmail.innerHTML = "E-mai: "+EMAIL.value;
   pNome.innerHTML = "Nome: "+NOME.value;
   pEnd.innerHTML = "Endereço: "+END.value;
   pUF.innerHTML =  "UF: "+UF.value;
   pResumo.innerHTML = "Resumo: "+ RESUMO.value;
   pCpf.innerHTML = "CPF: "+CPF.value;
   pData.innerHTML = 'DATA '+data.value;

   
   show.appendChild(pNome);
   show.appendChild(pEmail);
   show.appendChild(pMoradia);
   show.appendChild(pCpf);
   show.appendChild(pEnd);
   show.appendChild(pUF);
   show.appendChild(pMoradia);
   show.appendChild(pData);


   
}



