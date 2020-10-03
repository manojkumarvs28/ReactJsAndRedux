import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import classes from './SelectedContent.css';

const selectedContent = (props) => {
    return (
        <div id="hero" className={classes.Hero} style={{backgroundImage:'url(https://images.alphacoders.com/633/633643.jpg)'}}>
            <div className={classes.content}>
                <img className={classes.Logo} src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
                <h2>Season 2 now available</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
                <div className={classes.buttonWrapper}>
                    <CustomButton primary={true} text="Watch Now"></CustomButton>
                    <CustomButton primary={false} text="+My List"></CustomButton>
                </div>
            </div>
            <div className={classes.overlay}></div>
        </div>
    )
}

export default selectedContent;