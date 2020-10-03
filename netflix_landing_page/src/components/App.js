import React, { Component } from 'react';
import classes from './App.css';
import Logo from '../Logo/Logo.js';
import NavigationList from './NavigationList/NavigationList';
import UserProfile from './UserProfile/UserProfile';
import SelectedContent from './SelectedContent/SelectedContent';
import TitleList from './TitleList/TitleList';

class App extends Component {
  state={
    searchTerm:"",
    searchUrl:""
  }
  handleKeyUp = (e) => {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
      this.setState({searchUrl:searchUrl});
    }
  }
  handleChange = (e) => {
    this.setState({searchTerm : e.target.value}); 
  }
  render() {
    return (
      <div className="App">
        <header className={classes.header}>
          <Logo className={classes.logo}/>
          <NavigationList/>
          <input 
          type="search" 
          className={classes.search}
          placeholder="Search Movies,shows with title ..."
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}/>
          <UserProfile/>
        </header>
        <SelectedContent/>
        <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
}

export default App;
