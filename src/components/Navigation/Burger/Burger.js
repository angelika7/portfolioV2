import React from 'react';

import classes from './burger.scss';

const burger = (props) => (
    <button aria-label='Otwórz/Zamknij navigację' className={props.open ? [classes.burgerBox, classes.open].join(' ') : classes.burgerBox} onClick={props.onClick}>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
    </button>
);

export default burger;