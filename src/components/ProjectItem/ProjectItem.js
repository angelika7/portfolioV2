import React from 'react';
import { Link } from 'react-router-dom';
import styleText from './../../styles/_typography.scss';
import classes from './projectItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'; 

const projectItem = (props) => {

    return (
        <React.Fragment>
            <div className={classes.item} onClick={() => {props.onClick(props.id)}}>
                <div className={classes.img} style={{backgroundImage: props.bgImage}}>
                    <div className={classes.titleBox}>
                        <p className={styleText.info}>{props.info}</p>
                        <p className={[styleText.info, styleText.info___title].join(' ')}>{props.title}</p>
                    </div>
                </div>
                <div className={`${classes.back} ${props.isFlipped ? classes.isFlipped : ''}`}>
                    <div className={classes.closeBox}>
                        <FontAwesomeIcon icon={faTimes} className={classes.close} />
                    </div>
                    <div className={classes.icons}>
                        {props.active ?
                        <React.Fragment>
                            <Link to={{ pathname: props.live }} target="_blank"><FontAwesomeIcon icon={faGlobe} className={classes.icon} /></Link>
                            <Link to={{ pathname: props.github }} target="_blank"><FontAwesomeIcon icon={faGithubSquare} className={classes.icon} /> </Link>
                        </React.Fragment>
                        : null}
                    </div>
                    <div className={classes.textBox}>
                        <p className={[styleText.info, styleText.info___technologies].join(' ')}>{props.backInfo}</p>
                    </div> 
                </div> 
            </div>
        </React.Fragment>
    );
}

export default projectItem;