import React, { useState, useEffect } from 'react';
import classes from './Header.scss';
import slogan from './../../assets/images/slogan.png';
import girl from './../../assets/images/10-min.jpg';

const Header = (props) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        window.onload = () => {
            setLoaded(true)
        };
    });

    return (
    <header className={classes.header} id='home'>
        <div className={loaded ? [classes.imgBox, classes.animationImgBox].join(' ') : classes.imgBox}>
            <img src={girl} className={loaded ? [classes.img, classes.animationImg].join(' ') : classes.img} alt='Młoda dziewczyna siedzi przy laptopie i pracuje'/>
        </div>
        <div className={loaded ? [classes.sloganBox, classes.animationSloganBox].join(' ') : classes.sloganBox}>
            <img className={classes.slogan} src={slogan} alt='Slogan - Front-end Developer'/>
        </div>
        <div className={classes.nameBox}>
            <h2 className={loaded ? [classes.name, classes.typing].join(' ') : classes.name}>Angelika Chochorowska</h2> 
        </div>
    </header>

    )
};

export default Header;