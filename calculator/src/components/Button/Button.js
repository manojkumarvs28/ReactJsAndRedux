import React from 'react';
import classes from './Button.css';

const button = (props) => {
  return (
      <div 
            className={classes.button} 
            data-size={props.size} 
            data-value={props.value}
            onClick={props.onClick}>
         {props.label}
      </div>
  )
}

export default button;