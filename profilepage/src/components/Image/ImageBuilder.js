import React from 'react';
import classes from './ImageBuilder.css';

const imageBuilder = (props) => {
        return (
            <div className={classes.Image} style={{backgroundImage: 'url(' + props.src + ')'}}></div>
        )
}

export default imageBuilder;
