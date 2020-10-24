import React from 'react';
import classes from './Profile.css';

const profile = (props) => {
    return (
        <div className={classes.Profile}>
            <h1 className={classes.Name}>{props.person.name}</h1>
            <p className={classes.Bio}>{props.person.biography}</p>
            <div className={classes.Quote}>
                <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
                <div className={classes.byline}>&mdash; {props.quote.source}</div>
            </div>
        </div>
    )
}

export default profile;