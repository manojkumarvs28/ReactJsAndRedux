import React from 'react';
import classes from './Display.css';

const display=(props) => {
    let result = props.data.join('');
    return (
        <div className={classes.Display}>
            {result}
        </div>
        
    )
}

export default display;