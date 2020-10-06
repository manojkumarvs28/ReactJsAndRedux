import React from 'react';
import classes from './Input.css';

const input = (props) => {
    return (
        <div className={classes.Input}>
            <input className={classes.input}
            id={props.id}
            placeholder={props.placeholder}
            required="false"
            type={props.type}
            autoComplete="false"/>
           
        </div>
    )
}

export default input;