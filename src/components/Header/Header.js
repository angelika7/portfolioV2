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
    <header className={classes.Header} id='home'>
        <div className={loaded ? [classes.ImgBox, classes.AnimationImgBox].join(' ') : classes.ImgBox}>
            <img src={girl} className={loaded ? [classes.Img, classes.AnimationImg].join(' ') : classes.Img} alt='Młoda dziewczyna siedzi przy laptopie i pracuje'/>
        </div>
        <div className={loaded ? [classes.SloganBox, classes.AnimationSloganBox].join(' ') : classes.SloganBox}>
            <img className={classes.Slogan} src={slogan} alt='Slogan - Front-end Developer'/>
        </div>
        <div className={classes.NameBox}>
            <h2 className={loaded ? [classes.Name, classes.Typing].join(' ') : classes.Name}>Angelika Chochorowska</h2> 
        </div>
    </header>

    )
};

export default Header;