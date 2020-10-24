import React from 'react';
import PropTypes from 'prop-types';
import classes from './Setting.css'

const Setting = (props) => {
    return (
        <div className={classes.Setting}>
            <label>
               <div>{props.name}</div>
               <div>{props.value}</div>
            </label>
            <input
                min={props.min}
                max={props.max}
                steps="1"
                onChange={props.onChange}
                id={props.name}
                type="range"
                value={props.value}
            ></input>
        </div>
    )
}

Setting.propTypes = {
    name:PropTypes.string,
    value:PropTypes.number,
    min:PropTypes.number,
    max:PropTypes.number,
    onChange:PropTypes.func
}

export default Setting;