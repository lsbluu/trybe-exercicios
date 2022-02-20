import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  render(){
const shoppingList = ['leite','arroz','banana','carne'];
const items = shoppingList.map((item, index) => {
  console.log("Item: ", item);
  return (<li key={index}>{item}</li>)
})

    return(
      <div>
        <h2>Lista de compras</h2>
        <ul>
          {items}
        </ul>
      </div>
    );
  }

  

  

}

export default App;
