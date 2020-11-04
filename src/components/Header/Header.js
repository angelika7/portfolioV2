import React from 'react';
import classes from './Header.scss';
import slogan from './../../assets/images/slogan.png';
import girl from './../../assets/images/10-min.jpg';
//import fontFamily from './../../assets/fonts/Notera.ttf'
import Toolbar from './../Navigation/Toolbar/Toolbar'

const header = (props) => (
    <header className={classes.Header} id='home'>
        <div className={classes.TopBar}></div> 
        <Toolbar open={props.open}/>
        
        <div className={classes.ImgBox}>
            <img src={girl} className={classes.Img} alt='Foto 1'/>
        </div>
        
        
        <div className={classes.SloganBox}>
            <img className={classes.Slogan} src={slogan} alt='Foto 2'/>
        </div>
        <div className={classes.NameBox}>
            <h2 className={classes.Name}>Angelika Chochorowska</h2> 
        </div>
    </header>
);

export default header;