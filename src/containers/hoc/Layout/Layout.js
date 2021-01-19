import React from 'react';
import classes from './layout.scss'

const layout = (props) => (
    <div className={classes.container}>
        {props.children}
    </div>
);

export default layout;