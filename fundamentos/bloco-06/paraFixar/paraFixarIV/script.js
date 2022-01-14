const INPUT_TEXT = document.querySelector('#input-text');
const INPUT_CHECKBOX = document.querySelector('#input-checkbox');
const HREF_LINK = document.querySelector('#href');

//1 - Adicione um evento click no elemento a que possui o id href . Na função do evento, implemente o método .preventDefault()
 
HREF_LINK.addEventListener('click', function(event){
    event.preventDefault();
})

//2 - Adicione um evento click no elemento checkbox que possui o id input-checkbox . Na função do evento, implemente o método .preventDefault()
INPUT_CHECKBOX.addEventListener('click',function(event){
  event.preventDefault();
})

INPUT_TEXT.addEventListener('keypress',function(event){
event.preventDefault();})