import React, { Component } from 'react';
import './App.css';
import Logo from '../Logo.js';
import NavigationList from './NavigationList/NavigationList';
import UserProfile from './UserProfile/UserProfile';

class App extends Component {
  handleKeyUp = () => {

  }
  handleChange = () => {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo/>
          <NavigationList/>
          <input 
          type="search" 
          placeholder="Search Movies,shows with title ..."
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}/>
          <UserProfile/>
        </header>
        
      </div>
    );
  }
}

export default App;
