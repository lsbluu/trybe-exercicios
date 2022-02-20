import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon';
import pokemons from './Data';
import { Component } from 'react';


class App extends Component{
  render(){
    
    return (
      pokemons.map((poke) => 
      <div className='poke' key={poke.id}> <Pokemon pokemon={poke} /> 
      </div>)
  
    )
  }
}

export default App;
