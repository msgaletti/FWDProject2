import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Menu from './Menu';
import Item from './Item';

class App extends Component{
  render(){
    return (
      <div>
        <Menu />
      </div>
    );
  }
}



export default App;
