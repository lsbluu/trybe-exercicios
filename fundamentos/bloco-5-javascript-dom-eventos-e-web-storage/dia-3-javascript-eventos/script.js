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
       
        if(dezDaysList[i] === 24 || dezDaysList[i] === 31){
            liItem.className = "holiday day"
        } else if(dezDaysList[i]===4 || dezDaysList[i]===11 || dezDaysList[i]===18){
            liItem.className = "day friday"
        } else if(dezDaysList[i] === 25){
            liItem.className = "holiday day friday"
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


    function createSexta (sexta){
            const bt = document.createElement('button');
            const buttonsContainer = document.querySelector('.buttons-container');
            bt.id = 'btn-friday';
            bt.innerText = sexta;
            buttonsContainer.appendChild(bt);

    }

    createSexta('Sexta-Feira');
let buttonOfSexta = false;
    function btSextaListener(){
        const bt = document.getElementById('btn-friday');
        bt.addEventListener('click',function(){
            const friday = document.querySelectorAll('.friday');
            const sextas = [4,11,18,25];
            console.log(friday)
            for(let i = 0; i <friday.length; i+=1){
                let sexta = friday[i];
                
            if(buttonOfSexta){
                sexta.innerText = 'Sextou'
            } else{
                sexta.innerText = sextas[i];
                
            }

            }
            buttonOfSexta = !buttonOfSexta;
        })
    }
    btSextaListener();

    function aumentaDay(){
        let days = document.querySelectorAll('.day');


        for(let i = 0 ; i<days.length;i+=1){
            let dayss = days[i];

            dayss.addEventListener('mouseover', zoomMais);
            dayss.addEventListener('mouseout', zoomMenos);

        }

    }

    aumentaDay();


    function zoomMais(event){
        let day = event.target;
        day.style.fontSize = "40px";
        console.log(event.target)
    }

    function zoomMenos(event){
        let day = event.target;
        day.style.fontSize = "20px"
    }

    function tarefa(tarefa){
        const task = document.querySelector('.my-tasks')
        const span = document.createElement('span');
       
        span.innerText = tarefa;

        task.appendChild(span);
    }

    tarefa('cozinhar');

   
    function adicionaCor(cor){
        const task = document.querySelector('.my-tasks');
        let div = document.createElement('div');
        div.className = "task";
        div.style.backgroundColor = cor;

        task.appendChild(div);


    }

    adicionaCor('red');
let taskBO = false;
    function selecionado(){
        const task = document.querySelector('.my-tasks div');
        const task1 = document.querySelectorAll('.my-tasks div')
                
            task.addEventListener('click',function(){
                for(let i =0; i<task1.length;i+=1){
                    if(taskBO){
                        task.className = 'task selected' 
                        console.log(task)
                    } else{
                     task.className = 'task' ;
                     console.log(task)
                    }
                    taskBO = !taskBO

                }})};
        selecionado();



