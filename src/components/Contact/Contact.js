import React from 'react';
import classes from './contact.scss';
import { Link } from 'react-router-dom';

import contactText from './../../assets/images/contact.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';


const contact = (props) => (
    <section className={classes.contact} id='contact'>
        <img className={classes.slogan} src={contactText} alt='Text'/>
        <div className={classes.infoBox}>
            <Link to={{ pathname: "https://www.facebook.com/angelika.chochorowska/" }} target="_blank"><FontAwesomeIcon icon={faFacebookSquare} className={classes.icon} /></Link>
            <a href="mailto:angelika.chochorowska7@gmail.com"><FontAwesomeIcon icon={faGooglePlusSquare} className={classes.icon} /></a>
            <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
            <Link to={{ pathname: "https://github.com/angelika7" }} target="_blank"><FontAwesomeIcon icon={faGithubSquare} className={classes.icon} /></Link>
        </div>
        <div className={classes.decoration}></div>
    </section>
);

export default contact;