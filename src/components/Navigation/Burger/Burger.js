import React from 'react';

import classes from './burger.scss';

const burger = (props) => (
    <button aria-label='Otwórz/Zamknij navigację' className={props.open ? [classes.BurgerBox, classes.Open].join(' ') : classes.BurgerBox} onClick={props.onClick}>
        <span className={classes.Line}></span>
        <span className={classes.Line}></span>
        <span className={classes.Line}></span>
    </button>
);

export default burger;