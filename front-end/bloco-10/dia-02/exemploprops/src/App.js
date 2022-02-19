import './App.css';
import Image from './Image';
import UserProfile from './UserProfile';
import Album from "./Album";
import React ,{Component} from 'react';
import Order from './Order'
class App extends React.Component {
    render() {
        const headphone = {
            id: 102,
            user: "cena@gmail.com",
            product: "Razer Headphone",
            price: {
              value: 99.99,
              currency: "dollars"
            }
          };
      
          const energyDrink = {
            id: 77,
            user: "cena@gmail.com",
            product: "Monster 500mL",
            price: {
              value: 9.99,
              currency: "dollars"
            }
          };

          return (
              <div>
                  <h1>Orders recently created</h1>
                  <Order order={energyDrink}/>
              </div>
          )
       
    }}
  export default App;