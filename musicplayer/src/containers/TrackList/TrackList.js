import React, {Component} from 'react';
import data from '../../data/tracks.json';
import classes from './TrackList.css';

class TrackList extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        tracks:[]
    }

    componentDidUpdate() {
        if (this.activeTrack) {
          let topOfTrackList = this.trackList.scrollTop;
          let bottomOfTrackList =
            this.trackList.scrollTop + this.trackList.clientHeight;
          let positionOfSelected = this.activeTrack.offsetTop;
          if (
            topOfTrackList > positionOfSelected ||
            bottomOfTrackList < positionOfSelected
          ) {
            this.trackList.scrollTop = positionOfSelected;
          }
        }
     }

    componentDidMount() {
        this.setState({
            tracks:data.tracks
        });
    }

    renderListItem =(track, i) => {
        let trackClass = this.props.currentTrackIndex === track.id ? "selected" : "";
       return (
           <li 
             key={track.id}
              className={trackClass}
             ref={
                 cur => {
                     if(this.props.currentTrackIndex === track.id) {
                           this.activeTrack = cur;
                     }
                 }
             }
             onClick={()=>{this.props.selectTrack(track.id)}}
           >
              <div className={classes.number}>{track.id}</div>
              <div className={classes.title}>{track.title}</div>
              <div className={classes.duration}>{track.duration}</div>
           </li>
       )
   }

    render() {
        let tracks = this.state.tracks.map(this.renderListItem);
        return (
            <ul 
               className={classes.TrackList}
               ref={input => {
                   this.trackList = input
               }}
            >
                {tracks}
            </ul>
        )
    }
}

export default TrackList