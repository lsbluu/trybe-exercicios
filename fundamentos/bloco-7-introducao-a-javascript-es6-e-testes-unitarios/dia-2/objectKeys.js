const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

//esrutura padrão
//   for (const key in coolestTvShow) {
//    console.log(coolestTvShow[key]);
//       }
  
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };

const listSkill = (Student) =>{
    const arraySkills = Object.keys(Student)

    for(let index in arraySkills){
        console.log(`${arraySkills[index]} ----- Nivel: ${Student[arraySkills[index]]}` );

    }
}


listSkill(student1);

