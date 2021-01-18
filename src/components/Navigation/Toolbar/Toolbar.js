import React from 'react';
import Navigation from '../NavList/NavList';
import Burger from './../Burger/Burger';

import classes from './toolbar.scss';

const toolbar = (props) => {
    return (
    <nav className={classes.Toolbar}>
        <div className={props.open ? [classes.Circle, classes.Expand].join(' ') : classes.Circle}></div>
        <Burger onClick={props.onClick} open={props.open}/>
        <Navigation open={props.open}/>
    </nav>
    )
};

export default toolbar;