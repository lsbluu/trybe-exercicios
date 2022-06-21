const fs = require('fs').promises;


const newPromise =  () => {
    try {
   const simpsons = fs.readFile('./json/simpsons.json', 'utf-8') 
    return simpsons;
  } catch (error) {
    console.error(`Falha na requisição: ${error.mesage}`);
  }
}


const listNames = (simpsons) => {
  try {
    console.log(`Função ListNames \n`);
    const array = JSON.parse(simpsons)
    for (const value of array) {
      console.log(`${value.id} - ${value.name}`);
    }  
    console.log(`\nFIM ListNames`);
  } catch (error) {
    console.error(`Erro: ${error.mesage}`);
  }
  }

  const searchID = async (id) => {
    try {
      const simpsons = await fs.readFile('./json/simpsons.json', 'utf-8') 
      const array =  JSON.parse(simpsons);
      const idFilter = array.find((simpson) => {
        return simpson.id == id})
      console.log(idFilter)
      
    } catch (error) {
      console.error(`Erro ${error.mesage}`)
    }
  }

  const writeSimpson = async (...ids) => {
    try {

      
        const simpsons = await fs.readFile('./json/simpsons.json', 'utf-8') 
        let newSimpson = JSON.parse(simpsons);
        for (let iterator of ids) {
        newSimpson = newSimpson.filter((simp) => Number(simp.id) !== iterator );
        console.log(newSimpson)
        }
        const newStringFy = JSON.stringify(newSimpson);
      
        await fs.writeFile('./json/simp.json',newStringFy );

      
      
    } catch (error) {

      console.error(`Erro: ${error.mesage}`);  
    }
  }

  const writeSimpson1And4 = async () => {
    try {
      const simpsons = await fs.readFile('./json/simpsons.json', 'utf-8');
      const simpsonsJsonParse = JSON.parse(simpsons);
      const newSimpsonFilter = simpsonsJsonParse.filter((simpson) => Number(simpson.id) <= 4);
      const simpsonsStringFy = JSON.stringify(newSimpsonFilter);
      console.log(newSimpsonFilter)
      await fs.writeFile('./json/simpsons1And4.json', simpsonsStringFy);
    } catch (error) {
      console.error(`Erro: ${error.mesage}`);
    }
  }

  const writeNewSimpsons = async () => {
    try {
      const simpsons = await fs.readFile('./json/simpsons.json', 'utf-8');
      const simpsonsJsonParse = JSON.parse(simpsons);
      simpsonsJsonParse.push({"id":"11","name":"Nelson Muntz"})
      const newTxt = JSON.stringify(simpsonsJsonParse)
      await fs.writeFile('./json/writeNewSimpsons.json', newTxt);
    } catch (error) {
      console.error(`Error: ${error.mesage}`);
    }
  }

  const changeSimpson = () => {
    
  }


const main = async () => {
const simp =  await newPromise();
  // listNames(simp);
  // searchID(2);
  // writeSimpson(1,2)
  // writeSimpson1And4();
  writeNewSimpsons();

}

main();


