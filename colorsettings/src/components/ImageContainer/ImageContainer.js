import React from 'react';
import classes from './ImageContainer.css';

const imageContainer = (props) => {
    return (
        <div 
        className={classes.Image}
        style={{backgroundImage: 'url(' + props.image + ')'}}> </div>
    )
}

export default imageContainer;