import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styleText from './../../styles/_typography.scss';
import classes from './projectItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'; 

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectItem = (props) => {
    const sectionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(sectionRef.current, {opacity: 0, y: '-=20'}, {opacity: 1, y: '+=20', duration: 1, easy: "power4.out", scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
        }});
    }, []);

    return (
        <React.Fragment>
            <div className={classes.Item} ref={sectionRef} onClick={() => {props.onClick(props.id)}}>
                <div className={classes.Img} style={{backgroundImage: props.bgImage}}>
                    <div className={classes.TitleBox}>
                        <p className={styleText.Info}>{props.info}</p>
                        <p className={[styleText.Info, styleText.Info___title].join(' ')}>{props.title}</p>
                    </div>
                </div>
                <div className={`${classes.Back} ${props.isFlipped ? classes.IsFlipped : ''}`}>
                    <div className={classes.CloseBox}>
                        <FontAwesomeIcon icon={faTimes} className={classes.Close} />
                    </div>
                    <div className={classes.Icons}>
                        {props.active ?
                        <React.Fragment>
                        <Link to={{ pathname: props.live }} target="_blank"><FontAwesomeIcon icon={faGlobe} className={classes.Icon} /></Link>
                        <Link to={{ pathname: props.github }} target="_blank"><FontAwesomeIcon icon={faGithubSquare} className={classes.Icon} /> </Link>
                        </React.Fragment>
                        : null}
                        
                    </div>
                    <div className={classes.TextBox}>
                        <p className={[styleText.Info, styleText.Info___technologies].join(' ')}>{props.backInfo}</p>
                    </div> 
                </div> 
            </div>
        </React.Fragment>
    );
}

export default ProjectItem;