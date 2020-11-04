import React from 'react';
import Navigation from '../NavList/NavList';

import classes from './toolbar.scss';

const toolbar = (props) => (
    <nav className={props.open ? [classes.Toolbar, classes.IsOpened].join(' ') : classes.Toolbar}>
        <Navigation />
    </nav>
);

export default toolbar;