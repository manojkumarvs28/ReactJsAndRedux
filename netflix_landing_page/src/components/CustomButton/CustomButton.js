import React from 'react';
import classes from './CustomButton.css';

const customButton = (props) => {
   return (
   <a href="#" className={classes.Button} data-primary={props.primary}>{props.text}</a>
   )
}

export default customButton;