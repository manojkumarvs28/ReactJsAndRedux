import React from 'react';
import classes from './Item.css';

const item = (props) => {
    return (
        
            <div className={classes.Item} style={{backgroundImage: 'url('+ props.backdrop+')'}}>
                <div className={classes.overlay}>
                    <div className={classes.title}>{props.title}</div>
                    <div className={classes.rating}>{props.score}</div>
                    <div className={classes.plot}>{props.overview}</div>
                </div>
            </div>
       
    )
}

export default item;