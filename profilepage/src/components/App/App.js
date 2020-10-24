import React, { Component } from 'react';
import classes from './App.css';
import ImageBuilder from '../Image/ImageBuilder';
import Profile from '../Profile/Profile';
class App extends Component {

  state={
    person: {
      name: 'Jack-Edward Oliver',
      biography: '26 year old Designer / Developer living in Stockholm. Originally from Oxford, England. Love to make stuff.',
    },
    image: 'http://static1.squarespace.com/static/55acc005e4b098e615cd80e2/t/57b057398419c2c454f09924/1471025851733/',
    quote: {
      content: 'Beautiful things don\'t ask for attention',
      source: 'The Secret Life of Walter Mitty'
    }
  }

  render() {
    return (
      <div className={classes.App}>
        <header className={classes.Appheader}>
         <ImageBuilder src={this.state.image}></ImageBuilder>
         <Profile person={this.state.person} quote={this.state.quote}></Profile>
        </header>
      </div>
    );
  }
}

export default App;
