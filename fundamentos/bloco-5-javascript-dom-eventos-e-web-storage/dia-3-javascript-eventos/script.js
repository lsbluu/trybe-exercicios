let butonONOff = false;

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  function createDaysOfTheMonth(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDays = document.querySelector('#days');
    for(let i = 0; i<dezDaysList.length; i+=1){
        const liItem = document.createElement('li');
        const days = dezDaysList[i];
       
        if(dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
            liItem.className = "holiday day"
        } else if(dezDaysList[i]===4 || dezDaysList[i]===11 || dezDaysList[i]===18 || dezDaysList[i]===25){
            liItem.className = "day friday"
        } else {
            liItem.className = 'day';
        }
        liItem.innerHTML = days;
        monthDays.appendChild(liItem);
        
    }  }      createDaysOfTheMonth();

    function createButtonHoliday(holiday){
        const buttonsContainer = document.querySelector('.buttons-container')
        const bt = document.createElement('button')
        bt.id = "btn-holiday";
        buttonsContainer.appendChild(bt)
        bt.innerText = holiday;
    }
    createButtonHoliday('Feriados');

    function btListener(){
        const btt = document.querySelector('#btn-holiday');
        btt.addEventListener('click', mudaCor);
        
        
    }
    btListener();

  //solução encontrada no https://stackoverflow.com/questions/21927029/how-do-i-reverse-an-onclick-event-with-another-click
    function mudaCor(){
       const holyss = document.querySelectorAll('.holiday');

        for(let i = 0; i<holyss.length;i+=1){
            const holy = holyss[i]

        if(butonONOff){
            holy.style.backgroundColor = 'blue';
          //  butonONOff = !butonONOff;
        
        }else{
        holy.style.backgroundColor = 'red';
        //butonONOff = !butonONOff;
       }
       
        }   
        butonONOff = !butonONOff;
    }
   
    

