import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.BtTwo = this.BtTwo.bind(this);
    this.BtThree = this.BtThree.bind(this);
    this.state = {
      BtOne: 0,
      BtTwo: 0,
      BtThree: 0
    }
    

  }  

  isEven(number) {
    return number % 2 === 0 && number !== 0 ? 'green' : 'red';
  }

  
  handleClick(){
    console.log(this);
    this.setState((Estado, __props) => ({
      BtOne: Estado.BtOne + 1,
    }))
    
  };


  BtTwo(){
    console.log(this);
    this.setState((EstadoAnterior, __props) => ({
      BtTwo: EstadoAnterior.BtTwo + 1
    }))
  }

  BtThree(){
    console.log(this);
    this.setState((EstadoAnterior,__props) => ({
      BtThree: EstadoAnterior.BtThree + 1
    }))
  }
  
  render(){

  return (
    <div>
      <button onClick={this.handleClick} style={{backgroundColor: this.isEven(this.state.BtOne) }}>Botão 1</button>
      <button onClick={this.BtTwo}>Botão 2</button>
      <button onClick={this.BtThree}>Botão 3</button>

    </div>
  )

}}

export default App;