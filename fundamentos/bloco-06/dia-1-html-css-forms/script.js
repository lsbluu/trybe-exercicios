const UF = document.querySelector('#estados');
const estados = ['DF','SP','GO'];


function ufs() {
   for(let i=0; i<estados.length; i+=1){
      let ufs = estados[i];
      let options = document.createElement('option')
   
      options.innerHTML = ufs;
      options.value = estados[i];
   
      UF.appendChild(options);
      
   
      console.log(i);
   }
}

ufs();

