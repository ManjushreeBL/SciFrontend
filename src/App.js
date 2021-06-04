import React, {Component } from 'react'
import logo from './sci-logo.PNG';
import './App.css';


class App extends Component{
  render(){
    return(
     
      <div className='App'>
         <title>Sci</title>
        <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        
               Welcome to SCI world 
        </header>
      
      </div>
    );

  }
}


export default App;
