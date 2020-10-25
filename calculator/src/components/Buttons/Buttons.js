import React from 'react';
import classes from './Buttons.css';

const buttons=(props) => {
    return (
        <div className={classes.Buttons}>
            {props.children}
        </div>
        
    )
}

export default buttons;