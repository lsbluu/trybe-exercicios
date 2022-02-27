import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

function Teste1(){
  console.log('Teste1');
}

function Teste2(){
  console.log('Teste2');
}
function Teste3(){
  console.log('Teste3');
}
class App extends Component {
  render(){
    return (
      <div className="App">
        <button onClick={Teste1} >HELLO WORLD</button>
        <button onClick={Teste2} >HELLO WORLD</button>
        <button onClick={Teste3} >HELLO WORLD</button>
      </div>
    );
  }
 
}

export default App;
