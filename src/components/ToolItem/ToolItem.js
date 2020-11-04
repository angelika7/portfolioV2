import React, { useEffect, useRef } from 'react';
import classes from './toolItem.scss';
import styleText from './../../styles/_typography.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ToolItem = (props) => {
    const sectionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(sectionRef.current, {opacity: 0}, {opacity: 1, duration: 1, easy: "power4.out", scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
        }});
    }, [])

    return (
        <div className={classes.Item} ref={sectionRef} style={props.note ? {cursor: 'pointer'} : null} onClick={props.note ? () => {props.onClick(props.id)} : null}> 
            <img className={classes.Img} src={props.url} alt={props.alt}/>
            <div className={classes.ToolInfoBox}>
                <p className={[styleText.Info, styleText.Info___tools].join(' ')}>{props.info}</p>
            </div>
            <div className={`${classes.Back} ${props.isFlipped ? classes.IsFlipped : ''}`}>
                <div className={classes.CloseBox}>
                    <FontAwesomeIcon icon={faTimes} className={classes.Close} />
                </div>
                <div className={classes.TextBox}>
                    <p className={[styleText.Info, styleText.Info___skills].join(' ')}>{props.backInfo}</p>
                </div> 
            </div> 
        </div>
    );
}

export default ToolItem;