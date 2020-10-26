import React, { Component } from 'react';
import classes from './App.css';
import Controls from '../../components/Controls/Controls';
import TrackList from '../TrackList/TrackList';
import data from '../../data/tracks.json';
import appImg from '../../data/appImg.jpg';

class App extends Component {

  state = {
    playing:false,
    currentTrackIndex: 0
  }

  playAudio = () => {
     this.audioElement.load();
     this.audioElement.play();
  }

  pauseAudio = () => {
    this.audioElement.pause();
  }

  handleControlsSelection = (e) => {
     switch(e.target.id) {
       case "play": 
         this.setState((state, props) => {
           let currentIndex =state.currentTrackIndex;
           if(currentIndex === 0)
              currentIndex =1;
           return {
             playing:true,
             currentTrackIndex:currentIndex
           }   
         }, this.playAudio)
         break;
       case "pause" :
         this.setState({ playing: false },this.pauseAudio);
         break;
       case "prev"  :
         this.setState((state, props) => {
           let currentIndex = state.currentTrackIndex - 1;
           if(currentIndex <= 0) {
             return null;
           } else {
              return {
                playing:true,
                currentTrackIndex:currentIndex
              }
           }           
         },this.playAudio)
         break;
       case "next"  :
         this.setState((state, props) => {
           let nextIndex =  state.currentTrackIndex + 1;
           if(nextIndex > data.tracks.length) {
             return null;
           }else {
             return {
               playing:true,
               currentTrackIndex:nextIndex
             }
           }
         }, this.playAudio)
         break;
       default: break;     
     }
  }

  selectTrack = (trackId) => {
     this.setState({
       playing:true,
      currentTrackIndex:trackId
     }, this.playAudio)
  }

  render() {
    return (
      <div className={classes.App}>
        <div
         className={classes.Artwork}
         style={{backgroundImage:{appImg}}}>
           <Controls 
            onClick={this.handleControlsSelection} 
            playing={this.state.playing}/>
           <audio 
             ref={(audio) => {this.audioElement = audio}} 
             src={"/songs/"+this.state.currentTrackIndex+".mp3"}/> 
        </div>
          <TrackList 
          currentTrackIndex={this.state.currentTrackIndex}
          selectTrack={this.selectTrack}/>
      </div>
    );
  }
}

export default App;
