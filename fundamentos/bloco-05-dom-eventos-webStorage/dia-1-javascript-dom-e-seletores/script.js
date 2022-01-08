let filhos = document.getElementById('pai');
let filhosDoFilho = document.getElementById('elementoOndeVoceEsta');



filhos.removeChild(primeiroFilho)
filhos.removeChild(terceiroFilho)
filhos.removeChild(quartoEUltimoFilho)
filhosDoFilho.removeChild(segundoEUltimoFilhoDoFilho)













/*console.log(document.getElementById("elementoOndeVoceEsta"))
console.log(document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "blue")
console.log(document.getElementById("primeiroFilhoDoFilho").innerHTML = "Primeiro Filho")
console.log(document.getElementById("pai").firstElementChild)
console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling)
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling)
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling)
console.log(document.getElementById("pai").lastElementChild.previousElementSibling)
/*
OK Acesse o elemento elementoOndeVoceEsta .
OK Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
OK Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
OK Acesse o primeiroFilho a partir de pai .
OK Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
OK Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
OK Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
OK Agora acesse o terceiroFilho a partir de pai . 
*/

//criando irmão para elemento ondeVoceEsta

function irmao(){
let ondeEstaVc = document.getElementById('pai');
let novoElemento = document.createElement('section');
novoElemento.setAttribute('id','quintoFilho')
novoElemento.innerText = "quintoFilho";
ondeEstaVc.appendChild(novoElemento)
}

//criando filho
function filhoOndeVoceEsta(){
let filhoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let novoElemento = document.createElement('section');
novoElemento.setAttribute('id','terceiroFilho')
filhoOndeVoceEsta.appendChild(novoElemento)
}

//criando filho do primeiro filho
function filhoDoPrimeiro(){
let filhoPrimeiroFilho = document.getElementById('primeiroFilhoDoFilho')
let novoElemento = document.createElement('section')
novoElemento.setAttribute('id','filhoDoPrimeiro')
filhoPrimeiroFilho.appendChild(novoElemento)
}



