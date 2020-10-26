import React from 'react';
import classes from './Controls.css';

class Controls extends React.Component {
    render() {
      return (
        <div className={classes.Controls}>
          <div
            id="prev"
            className={classes.Prev}
            onClick={this.props.onClick}>
                     {"<<"}
                  </div>
          {!this.props.playing &&
            <div
              id="play"
              onClick={this.props.onClick}
              className={classes.Play}
          >{"|>"}</div>}
          {this.props.playing &&
            <div
              id="pause"
              onClick={this.props.onClick}
              className={classes.Pause}
          >{"||"}</div>}
          <div
            id="next"
            className={classes.next}
            onClick={this.props.onClick}
          >{">>"}</div>
        </div>
      );
    }
  }

export default Controls;