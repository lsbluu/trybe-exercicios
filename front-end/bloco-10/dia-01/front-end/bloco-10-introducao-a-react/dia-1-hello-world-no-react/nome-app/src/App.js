import Header from './Header';
import './App.css';

const task = (value) => {
  
  return (
    value.map((elemento) => <li>{elemento}</li> )
  );
}
const array = [' Estudar ',' Ler ',' Cantar ',' Andar ',' Jogar '];


function App() {
  return (
  <div>{task(array)}</div>
  );
}

export default App;
