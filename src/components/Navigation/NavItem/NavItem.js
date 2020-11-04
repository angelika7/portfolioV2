import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import classes from './navItem.scss'

const navItem = (props) => {
    return (
        <li className={classes.NavItem} id={props.id}>
            <NavLink 
                smooth to={props.link}
                //activeClassName={props.active}
            >    
            {props.children}   
            </NavLink>
        </li>
    );
}



export default navItem;