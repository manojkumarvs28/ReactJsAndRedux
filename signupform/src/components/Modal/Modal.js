import React from 'react';
import Input from '../Input/Input';
import classes from './Modal.css';

const modal =(props) => {
    return (
        <div className={classes.Modal}>
            <form 
            className={classes.form}
            onSubmit={props.onSubmit}>
                <Input 
                id='textInput'
                placeholder='UserName' 
                type='text'/>
                <Input 
                id='textInput'
                placeholder='Email-Id' 
                type='email'/>
                <Input 
                id='textInput'
                placeholder='Password' 
                type='password'/>
                <button className={classes.btn}> Log In</button>
            </form>
        </div>
    )
}

export default modal;