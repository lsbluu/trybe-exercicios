const button = document.getElementById('click');
const count = document.getElementById('count');
let clickCount = 0;

button.addEventListener('click', function(){
   
    count.innerHTML = clickCount +=1;
    console.log(clickCount);
    
});