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
    <section className={classes.Contact} id='contact'>
        <img className={classes.Slogan} src={contactText} alt='Text'/>
        <div className={classes.InfoBox}>
            <Link to={{ pathname: "https://www.facebook.com/angelika.chochorowska/" }} target="_blank"><FontAwesomeIcon icon={faFacebookSquare} className={classes.Icon} /></Link>
            <a href="mailto:angelika.chochorowska7@gmail.com"><FontAwesomeIcon icon={faGooglePlusSquare} className={classes.Icon} /></a>
            {/* <FontAwesomeIcon icon={faLinkedin} className={classes.Icon} /> */}
            <Link to={{ pathname: "https://github.com/angelika7" }} target="_blank"><FontAwesomeIcon icon={faGithubSquare} className={classes.Icon} /></Link>
        </div>
        <div className={classes.Decoration}></div>
    </section>
);

export default contact;