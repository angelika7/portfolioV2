import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import classes from './navItem.scss'

const navItem = (props) => {
    return (
        <li className={props.open ? [classes.navItem, classes.animate].join(' ') : classes.navItem} id={props.id}>
            <NavLink 
                smooth to={props.link}
            >    
            {props.children}   
            </NavLink>
        </li>
    );
}

export default navItem;